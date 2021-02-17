# pup-admin

Administration system and web API for the Publication Platform of the Centre for Digital Humanities at the University of Gothenburg.

Built on Strapi, which provides an admin GUI, content-type builder as well as a JSON API to the data.

**Status:** Evaluating if Strapi is the right fit for this project.

## Deploy

1. `git pull`
2. `NODE_ENV=production yarn build`
3. `sudo systemctl restart pup-admin`
