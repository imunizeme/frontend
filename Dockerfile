FROM giantswarm/caddy

COPY ./ /prebuild
WORKDIR /prebuild

RUN apk --update add curl ca-certificates nodejs nodejs-npm && \
   npm install @angular/cli -g && \
   npm install . && \
   ng build --output-path=/srv/

WORKDIR /srv
ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]