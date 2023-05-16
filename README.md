# metamask-sdk-reactNativeDemo

## initial commit
- base code :
    - metamask-sdk > example > reactNativeDemo
    - branch: main
    - last commit log: `d3a521a (refs/stash) WIP on main: 81099ac [FIX] clean key handshake when socket reconnects (ios / rn) (#98)`
    - https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/reactNativeDemo

## changed Note
-
- fix: Fix conditional expression error
- feat(refer): add web app source(.tgz) for action comparison
- feat(contract): add contract function
- feat(debug): Change env, lib version for debug on device.

## dev evn

```shell
$ npx react-native info
info Fetching system and libraries information...
System:
    OS: macOS 13.3.1
    CPU: (8) arm64 Apple M1 Pro
    Memory: 67.63 MB / 16.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 16.16.0 - ~/.nvm/versions/node/v16.16.0/bin/node
    Yarn: 1.22.19 - /opt/homebrew/bin/yarn
    npm: 8.11.0 - ~/.nvm/versions/node/v16.16.0/bin/npm
    Watchman: 2023.02.20.00 - /opt/homebrew/bin/watchman
  Managers:
    CocoaPods: 1.12.0 - /usr/local/bin/pod
  SDKs:
    iOS SDK:
      Platforms: DriverKit 22.4, iOS 16.4, macOS 13.3, tvOS 16.4, watchOS 9.4
    Android SDK:
      API Levels: 31, 32, 33
      Build Tools: 28.0.3, 30.0.2, 30.0.3, 31.0.0, 32.0.0, 32.1.0, 33.0.0
      System Images: android-31 | Google APIs ARM 64 v8a, android-32 | Google APIs ARM 64 v8a, android-33 | Google APIs ARM 64 v8a
      Android NDK: Not Found
  IDEs:
    Android Studio: Flamingo 2022.2.1 Patch 1 Flamingo 2022.2.1 Patch 1
    Xcode: 14.3/14E222b - /usr/bin/xcodebuild
  Languages:
    Java: 16.0.2 - /usr/bin/javac
  npmPackages:
    @react-native-community/cli: Not Found
    react: 18.2.0 => 18.2.0
    react-native: 0.71.7 => 0.71.7
    react-native-macos: Not Found
  npmGlobalPackages:
    *react-native*: Not Found
```

## build and run

### terminal 1
```shell
yarn install            # install dependencies
yarn start              # run metro
```

### terminal 2
```shell
cd ios &&  pod deintegrate && rm -rf build && pod install && cd ..  # pod install
yarn ios:device         # build and install on device
```

## refer web app source to diff
- base source of web app: /examples/create-react-app
- path : ./refer-examples-CRA-web-app/create-react-app.tgz

## issues
- https://github.com/MetaMask/metamask-sdk/issues/112
    - `[ReactNative, ios] When re-connect is repeated, there is a problem that does not connect normally (MetaMask SDK Version: v0.2.3)`
- https://github.com/MetaMask/metamask-sdk/issues/113
    - `[ReactNative, ios] Issues occurred in the use of Contract's ABI (MetaMask SDK: v0.2.3, MetaMask Mobile: v6.3.0)`
