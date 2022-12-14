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

In the src folder of [this](https://github.com/lufffer/LULIT-CAROUSEL) repo you can find this example,
and you can test that example [here](https://lufffer.github.io/LULIT-CAROUSEL/)

## Configuration

`lulit-carousel` accepts 4 attributes: `ride`, `dir`, `time` and `duration` and a custom event which return the current position

| Attribute | Functionality                                                                                                  |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| ride      | default: `false`, if `true` then active `dir` and `time` functionality                                         |
| dir       | default: `"right"`, if `ride` is true then `dir` defines the direction, possible values: `"right"` \| `"left"` |
| time      | default: `"5000"`, defines the time between transitions in miliseconds                                         |
| duration  | default: `"0.5"`, defines the duration of the transition in seconds                                            |

| Event           | Functionality                                           |
| --------------- | ------------------------------------------------------- |
| lutransitionend | Triggered after move to another element in the carousel |

| Property | Functionality              |
| -------- | -------------------------- |
| selected | Store the current position |

### JS Example

```
element.addEventListener('lutransitionend', (e) => consolo.log(e.detail.selected));
```

### TS Example

```
element.addEventListener('lutransitionend', (e: CustomInitEvent) => consolo.log(e.detail.selected));
```

or

```
element.addEventListener('lutransitionend', (e: CustomEvent<number>) => consolo.log(e.detail.selected));
```

## Notes

1. Transition animation does not use `animate` directive because it's still an experimental feature
2. Transition animation does not use GSAP, since when I test it in a cheap mobile phone, it worked quite badly,
   indeed, my animation works better in the same mobile phone.

## Maintainer

| <img src="https://github.com/lufffer/LULIT-CAROUSEL/blob/master/yo.png?raw=true" width="200" height="200" /> |
| ------------------------------------------------------------------------------------------------------------ |
| Cajal Fernando Lautaro                                                                                       |
