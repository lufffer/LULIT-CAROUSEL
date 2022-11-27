# LULIT-CAROUSEL

A carousel built with lit-element and typescript.

## Install

```
npm i lulit-carousel
```

## Usage

Super easy, just put `lulit-carousel` tag wherever you want in your html,
and fill it with data, by default it accepts `img` tag and
apply some default styles and then import `LuLitCarousel` from `'lulit-carousel'`

### HTML

```
<html>
  <head>
  </head>
  <body>
    <lulit-carousel>
      <img src="img1">
      <img src="img2">
      <img src="img3">
      <img src="img4">
      ...
    </lulit-carousel>
  </body>
</html>
```

### JS

`ìmport LuLitCarousel from 'lulit-carousel'`

## Example

In the src folder of this repo you can find this example,
and you can test that example here `https://lufffer.github.io/LULIT-CAROUSEL/`

## Configuration

`lulit-carousel` accepts 4 attributes: `ride`, `dir`, `time` and `duration`

| Attribute | Functionality                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| ride      | default: `false`, if `true` then active `dir` and `time` functionality                                         |
| dir       | default: `"right"`, if `ride` is true then `dir` defines the direction, possible values: `"right"` \| `"left"` |
| time      | default: `"5000"`, defines the time between transitions in miliseconds                                         |
| duration  | default: `"0.5"`, defines the duration of the transition in seconds                                            |

## Notes

1. Transition animation does not use `animate` directive because it's still an experimental feature
2. Transition animation does not use GSAP, since when I test it in a cheap mobile phone, it worked quite badly,
   indeed, my animation works better in the same mobile phone.

## Maintainer

| <img src="./yo.png" width="200" height="200" /> |
| ----------------------------------------------- |
| Cajal Fernando Lautaro                          |
