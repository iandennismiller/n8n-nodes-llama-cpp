![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

## Docker Installation

This process assumes there is a docker volume called `n8n_data` which is visible to the container at `~/.n8n`

1. Clone repo into `/var/lib/docker/volumes/n8n_data/_data/git`

```bash
cd /var/lib/docker/volumes/n8n_data/_data/git
git clone https://github.com/iandennismiller/n8n-nodes-llama-cpp.git
chown -R 1000:1000 n8n-nodes-llama-cpp
```

2. Enter n8n docker container with `docker exec -it n8n sh`

3. Create and initialize custom folder (once; this does not need to be repeated)

```bash
cd ~/.n8n
mkdir custom
cd custom
pnpm init
pnpm install n8n-workflow
```

4. Install and build the custom node

```bash
cd ~/.n8n/git/REPO
NODE_ENV=dev pnpm install
NODE_ENV=dev pnpm build
```

5. Move to the custom folder and link the new node

```bash
cd ~/.n8n/custom
NODE_ENV=dev pnpm link ~/.n8n/git/REPO
```

6. Restart n8n

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
