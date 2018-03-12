/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"App"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  // Splash screen image
  UIImageView* loadingView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"LaunchImage-700-Landscape"]];

  rootView.loadingView = loadingView;
  rootView.loadingViewFadeDelay = 0;
  rootView.loadingViewFadeDuration = 0.15;
  
  _bridge = rootView.bridge;

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  return YES;
}

/*
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [Intercom setDeviceToken:deviceToken];
}
*/

- (void)applicationDidBecomeActive:(UIApplication *)application {
  /*
  UIUserNotificationSettings *notificationSettings = [UIUserNotificationSettings
                                                      settingsForTypes:(UIUserNotificationTypeBadge
                                                                        | UIUserNotificationTypeSound
                                                                        | UIUserNotificationTypeAlert)
                                                      categories:nil];

  [UIApplication.sharedApplication registerUserNotificationSettings:notificationSettings];
  [UIApplication.sharedApplication registerForRemoteNotifications];
  */
}

@end
