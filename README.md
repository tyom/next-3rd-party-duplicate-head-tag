# 3rd party script results in duplicate meta tag

A minimal repro which shows duplication of `<meta name="viewport">` tag when adding a third-party script.

![image](https://user-images.githubusercontent.com/203886/107970855-9717af00-6fa9-11eb-8f07-dd503cf361f7.png)


## Issue

The page background should be set to grey by a script injecting the `style` tag. When the script that is injecting the styles is origining in `Head` the `style` tag is not injected and instead an existing `meta` tag is duplicated. By moving the script outside of `Head` it works as epxected.
