FROM giantswarm/caddy

COPY ./ /prebuild
WORKDIR /prebuild

RUN apk --update add curl ca-certificates nodejs && \
   npm install @angular/cli -g && \
   npm install . && \
   npm rebuild node-sass && \
   ng build --output-path=/home/www

WORKDIR /srv
ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]