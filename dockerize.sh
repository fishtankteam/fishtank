#! /bin/bash
{ set -eux -o pipefail; } 2>/dev/null

# do a full build before dockerizing
#npm install
#npm run build

# copy everything from root to docker folder except the docker folder itself
rsync -avr --exclude='/docker' --exclude='.gitignore' --exclude='package-lock.json' --exclude='README.md' --exclude='dockerize.sh' . docker

cd docker

tag="jasminewoo/fishtank-fe:${1}"
docker build -t "${tag}" .
#docker push "${tag}"