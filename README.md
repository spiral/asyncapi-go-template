<div align="center">

![AsyncAPI logo](https://user-images.githubusercontent.com/7326800/206534082-36d7caf2-a14e-4c80-bf66-9005142c1bb8.png)

![release][badge-release]
[![npm][badge-npm-version]][npm-package]
[![tests][badge-ci-tests]][actions]
[![release][badge-ci-release]][actions]
![license][badge-license]

</div>

## Overview

This template generates Go structures as a package for building event-driven applications.

## Template Output

The `go` code generated by this template has the following structure:

- `channels.gen.go` - contains all the channels defined in the AsyncAPI document.
- `payloads.gen.go` - contains all the payloads.
- `servers.gen.go` - contains servers addresses.
- `version.gen.go` - contains version constants.

## Technical requirements

- 1.1.0 =< [Generator](https://github.com/asyncapi/generator/) < 2.0.0
- Generator specific [requirements](https://github.com/asyncapi/generator/#requirements)

## How to use the template

This template must be used with the AsyncAPI Generator. You can find all available options [here](https://github.com/asyncapi/generator/).

### Run the following command to generate a Go package

```bash
$ npm install -g @asyncapi/generator
# clone this repository and navigate to this repository
$ ag ./example/asyncapi.yaml ./ -o ./example/generated -p packageName=your_go_package_name
```

Following are the options that can be passed to the generator

1. `packageName`: name of the go package to be generated

### Docker usage

Additionally, you can use the docker image:

| Registry                          | Image                                 |
|-----------------------------------|---------------------------------------|
| [GitHub Container Registry][ghcr] | `ghcr.io/spiral/asyncapi-go-template` |

> Using the `latest` tag for the docker image is highly discouraged because of possible backward-incompatible changes during **major** upgrades. Please, use tags in `X.Y.Z` format

```bash
$ docker run --rm -u "$(id -u):$(id -g)" -v "${PWD}:/host:rw" -w "/host" \
    ghcr.io/spiral/asyncapi-go-template ./example/asyncapi.yaml @spiral/asyncapi-go-template \
      -o ./example/generated \
      -p packageName=your_go_package_name \
      --force-write
```

In addition, the docker image contains installed [`@asyncapi/markdown-template`][md-template] and [`@asyncapi/html-template`][html-template]. You can use them to generate documentation for your AsyncAPI document.

[md-template]:https://github.com/asyncapi/markdown-template
[html-template]:https://github.com/asyncapi/html-template

## Template configuration

You can configure this template by passing different parameters in the Generator CLI: `-p PARAM1_NAME=PARAM1_VALUE -p PARAM2_NAME=PARAM2_VALUE`

| Name          | Description                       | Required | Example    |
|---------------|-----------------------------------|----------|------------|
| `packageName` | Name for the generated Go package | false    | `asyncapi` |

[badge-release]:https://img.shields.io/github/v/release/spiral/asyncapi-go-template?style=flat-square
[badge-npm-version]:https://img.shields.io/npm/v/@spiral/asyncapi-go-template?maxAge=30&style=flat-square
[badge-ci-tests]:https://img.shields.io/github/workflow/status/spiral/asyncapi-go-template/tests?maxAge=30&label=tests&logo=github&style=flat-square
[badge-ci-release]:https://img.shields.io/github/workflow/status/spiral/asyncapi-go-template/release?maxAge=30&label=release&logo=github&style=flat-square
[badge-license]:https://img.shields.io/github/license/spiral/asyncapi-go-template.svg?maxAge=30&style=flat-square
[actions]:https://github.com/spiral/asyncapi-go-template/actions
[npm-package]:https://github.com/spiral/asyncapi-go-template/pkgs/npm/asyncapi-go-template
[ghcr]:https://github.com/spiral/asyncapi-go-template/pkgs/container/asyncapi-go-template
