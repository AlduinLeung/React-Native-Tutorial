# 踩坑记录

## 安装

1. 安装的时候务必保持全程代理，ClashX中有一键复制命令行代理的命令

## 运行

1.   保持 metro版本和react-native版本要一致，否则会有函数解析不成功的问题 "metro-react-native-babel-preset": "^0.63.0",

https://stackoverflow.com/questions/62794709/react-native-index-js-transformer-transform-is-not-a-function

https://github.com/facebook/react-native/issues/29301

>For us this was caused by a version mismatch of the metro-config package. If you depend on this in your app to override some default metro configuration you should make sure it's the same version react-native depends on.
>In our case we upgraded to react-native@0.63.2 and also upgraded metro-config to 0.61, although react-native depended on 0.58. This caused the metro version used by the react-native CLI to try to load a transformer module from a path that does not exist for 0.58, returning undefined from the require call, leading to the error in question.
>You can check which versions are required and installed by running npm ls metro-config or searching the package-lock.json file.