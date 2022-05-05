FROM node:14

# RUN mkdir class_build 굳이 따로 필요없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build
CMD yarn start