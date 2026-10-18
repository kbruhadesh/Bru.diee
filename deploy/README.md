# Deploying to a 1GB Azure B2s VM

The site has no API routes, server actions, or per-request data — everything
is client-rendered. With `output: "export"` set in `next.config.mjs`,
`npm run build` produces a static `out/` folder (plain HTML/CSS/JS). That
means production **never runs a Node process** — nginx just serves files.
This is what actually matters for a 1GB box: `next start` alone idles around
150–300MB+ of resident RAM before any traffic; nginx serving static files
idles around 5–10MB.

## Recommended: build elsewhere, deploy the static files

Building (`next build`) is the only RAM-heavy step — TypeScript checking +
bundling can spike well past 1GB, which risks the OOM killer on a B2s with
nothing else to give. Build on your laptop or in CI instead:

```bash
npm install
npm run build        # outputs ./out
scp -r out/* user@your-vm:/var/www/bruhadesh-os/
```

Then on the VM, just point nginx at it with `deploy/nginx.conf`:

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/bruhadesh-os
sudo ln -s /etc/nginx/sites-available/bruhadesh-os /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

That's the whole deploy. No PM2, no systemd service for Node, no process to
ever OOM in production.

## If you do need to build on the VM itself

Add swap first — a 1GB B2s with no swap will very likely kill the build
mid-way:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

Then cap Node's heap so it degrades (uses swap) instead of getting OOM-killed:

```bash
NODE_OPTIONS="--max-old-space-size=896" npm run build
```

Either way, once `out/` exists, the running footprint is the same: nginx
only.
