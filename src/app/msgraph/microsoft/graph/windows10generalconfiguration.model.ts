﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DefenderCloudBlockLevelType } from './defendercloudblockleveltype.enum';
import { DefenderMonitorFileActivity } from './defendermonitorfileactivity.enum';
import { DefenderPromptForSampleSubmission } from './defenderpromptforsamplesubmission.enum';
import { DefenderScanType } from './defenderscantype.enum';
import { DiagnosticDataSubmissionMode } from './diagnosticdatasubmissionmode.enum';
import { EdgeCookiePolicy } from './edgecookiepolicy.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { SafeSearchFilterType } from './safesearchfiltertype.enum';
import { StateManagementSetting } from './statemanagementsetting.enum';
import { VisibilitySetting } from './visibilitysetting.enum';
import { WeeklySchedule } from './weeklyschedule.enum';
import { WindowsSpotlightEnablementSettings } from './windowsspotlightenablementsettings.enum';
import { WindowsStartMenuAppListVisibilityType } from './windowsstartmenuapplistvisibilitytype.enum';
import { WindowsStartMenuModeType } from './windowsstartmenumodetype.enum';
import { DefenderDetectedMalwareActions } from './defenderdetectedmalwareactions.complex';
import { EdgeSearchEngineBase } from './edgesearchenginebase.complex';
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.complex';
import { Windows10GeneralConfiguration } from './windows10generalconfiguration.entity';
import { DefenderDetectedMalwareActionsModel } from './defenderdetectedmalwareactions.model';
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { Windows10NetworkProxyServerModel } from './windows10networkproxyserver.model';
import { DefenderDetectedMalwareActionsCollection } from './defenderdetectedmalwareactions.collection';
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
import { Windows10NetworkProxyServerCollection } from './windows10networkproxyserver.collection';
import { Windows10GeneralConfigurationCollection } from './windows10generalconfiguration.collection';
//#endregion

export class Windows10GeneralConfigurationModel<E extends Windows10GeneralConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  accountsBlockAddingNonMicrosoftAccountEmail: boolean;
  antiTheftModeBlocked: boolean;
  appsAllowTrustedAppsSideloading: StateManagementSetting;
  appsBlockWindowsStoreOriginatedApps: boolean;
  bluetoothAllowedServices?: string[];
  bluetoothBlockAdvertising: boolean;
  bluetoothBlockDiscoverableMode: boolean;
  bluetoothBlocked: boolean;
  bluetoothBlockPrePairing: boolean;
  cameraBlocked: boolean;
  cellularBlockDataWhenRoaming: boolean;
  cellularBlockVpn: boolean;
  cellularBlockVpnWhenRoaming: boolean;
  certificatesBlockManualRootCertificateInstallation: boolean;
  connectedDevicesServiceBlocked: boolean;
  copyPasteBlocked: boolean;
  cortanaBlocked: boolean;
  defenderBlockEndUserAccess: boolean;
  defenderCloudBlockLevel: DefenderCloudBlockLevelType;
  defenderDaysBeforeDeletingQuarantinedMalware?: number;
  defenderDetectedMalwareActions?: DefenderDetectedMalwareActionsModel<DefenderDetectedMalwareActions>;
  defenderFileExtensionsToExclude?: string[];
  defenderFilesAndFoldersToExclude?: string[];
  defenderMonitorFileActivity: DefenderMonitorFileActivity;
  defenderProcessesToExclude?: string[];
  defenderPromptForSampleSubmission: DefenderPromptForSampleSubmission;
  defenderRequireBehaviorMonitoring: boolean;
  defenderRequireCloudProtection: boolean;
  defenderRequireNetworkInspectionSystem: boolean;
  defenderRequireRealTimeMonitoring: boolean;
  defenderScanArchiveFiles: boolean;
  defenderScanDownloads: boolean;
  defenderScanIncomingMail: boolean;
  defenderScanMappedNetworkDrivesDuringFullScan: boolean;
  defenderScanMaxCpu?: number;
  defenderScanNetworkFiles: boolean;
  defenderScanRemovableDrivesDuringFullScan: boolean;
  defenderScanScriptsLoadedInInternetExplorer: boolean;
  defenderScanType: DefenderScanType;
  defenderScheduledQuickScanTime?: Date;
  defenderScheduledScanTime?: Date;
  defenderSignatureUpdateIntervalInHours?: number;
  defenderSystemScanSchedule: WeeklySchedule;
  developerUnlockSetting: StateManagementSetting;
  deviceManagementBlockFactoryResetOnMobile: boolean;
  deviceManagementBlockManualUnenroll: boolean;
  diagnosticsDataSubmissionMode: DiagnosticDataSubmissionMode;
  edgeAllowStartPagesModification: boolean;
  edgeBlockAccessToAboutFlags: boolean;
  edgeBlockAddressBarDropdown: boolean;
  edgeBlockAutofill: boolean;
  edgeBlockCompatibilityList: boolean;
  edgeBlockDeveloperTools: boolean;
  edgeBlocked: boolean;
  edgeBlockExtensions: boolean;
  edgeBlockInPrivateBrowsing: boolean;
  edgeBlockJavaScript: boolean;
  edgeBlockLiveTileDataCollection: boolean;
  edgeBlockPasswordManager: boolean;
  edgeBlockPopups: boolean;
  edgeBlockSearchSuggestions: boolean;
  edgeBlockSendingDoNotTrackHeader: boolean;
  edgeBlockSendingIntranetTrafficToInternetExplorer: boolean;
  edgeClearBrowsingDataOnExit: boolean;
  edgeCookiePolicy: EdgeCookiePolicy;
  edgeDisableFirstRunPage: boolean;
  edgeEnterpriseModeSiteListLocation?: string;
  edgeFirstRunUrl?: string;
  edgeHomepageUrls?: string[];
  edgeRequireSmartScreen: boolean;
  edgeSearchEngine?: EdgeSearchEngineBaseModel<EdgeSearchEngineBase>;
  edgeSendIntranetTrafficToInternetExplorer: boolean;
  edgeSyncFavoritesWithInternetExplorer: boolean;
  enterpriseCloudPrintDiscoveryEndPoint?: string;
  enterpriseCloudPrintDiscoveryMaxLimit?: number;
  enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string;
  enterpriseCloudPrintOAuthAuthority?: string;
  enterpriseCloudPrintOAuthClientIdentifier?: string;
  enterpriseCloudPrintResourceIdentifier?: string;
  experienceBlockDeviceDiscovery: boolean;
  experienceBlockErrorDialogWhenNoSIM: boolean;
  experienceBlockTaskSwitcher: boolean;
  gameDvrBlocked: boolean;
  internetSharingBlocked: boolean;
  locationServicesBlocked: boolean;
  lockScreenAllowTimeoutConfiguration: boolean;
  lockScreenBlockActionCenterNotifications: boolean;
  lockScreenBlockCortana: boolean;
  lockScreenBlockToastNotifications: boolean;
  lockScreenTimeoutInSeconds?: number;
  logonBlockFastUserSwitching: boolean;
  microsoftAccountBlocked: boolean;
  microsoftAccountBlockSettingsSync: boolean;
  networkProxyApplySettingsDeviceWide: boolean;
  networkProxyAutomaticConfigurationUrl?: string;
  networkProxyDisableAutoDetect: boolean;
  networkProxyServer?: Windows10NetworkProxyServerModel<Windows10NetworkProxyServer>;
  nfcBlocked: boolean;
  oneDriveDisableFileSync: boolean;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeScreenTimeout?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredType: RequiredPasswordType;
  passwordRequireWhenResumeFromIdleState: boolean;
  passwordSignInFailureCountBeforeFactoryReset?: number;
  personalizationDesktopImageUrl?: string;
  personalizationLockScreenImageUrl?: string;
  privacyAdvertisingId: StateManagementSetting;
  privacyAutoAcceptPairingAndConsentPrompts: boolean;
  privacyBlockInputPersonalization: boolean;
  resetProtectionModeBlocked: boolean;
  safeSearchFilter: SafeSearchFilterType;
  screenCaptureBlocked: boolean;
  searchBlockDiacritics: boolean;
  searchDisableAutoLanguageDetection: boolean;
  searchDisableIndexerBackoff: boolean;
  searchDisableIndexingEncryptedItems: boolean;
  searchDisableIndexingRemovableDrive: boolean;
  searchEnableAutomaticIndexSizeManangement: boolean;
  searchEnableRemoteQueries: boolean;
  settingsBlockAccountsPage: boolean;
  settingsBlockAddProvisioningPackage: boolean;
  settingsBlockAppsPage: boolean;
  settingsBlockChangeLanguage: boolean;
  settingsBlockChangePowerSleep: boolean;
  settingsBlockChangeRegion: boolean;
  settingsBlockChangeSystemTime: boolean;
  settingsBlockDevicesPage: boolean;
  settingsBlockEaseOfAccessPage: boolean;
  settingsBlockEditDeviceName: boolean;
  settingsBlockGamingPage: boolean;
  settingsBlockNetworkInternetPage: boolean;
  settingsBlockPersonalizationPage: boolean;
  settingsBlockPrivacyPage: boolean;
  settingsBlockRemoveProvisioningPackage: boolean;
  settingsBlockSettingsApp: boolean;
  settingsBlockSystemPage: boolean;
  settingsBlockTimeLanguagePage: boolean;
  settingsBlockUpdateSecurityPage: boolean;
  sharedUserAppDataAllowed: boolean;
  smartScreenBlockPromptOverride: boolean;
  smartScreenBlockPromptOverrideForFiles: boolean;
  smartScreenEnableAppInstallControl: boolean;
  startBlockUnpinningAppsFromTaskbar: boolean;
  startMenuAppListVisibility: WindowsStartMenuAppListVisibilityType;
  startMenuHideChangeAccountSettings: boolean;
  startMenuHideFrequentlyUsedApps: boolean;
  startMenuHideHibernate: boolean;
  startMenuHideLock: boolean;
  startMenuHidePowerButton: boolean;
  startMenuHideRecentJumpLists: boolean;
  startMenuHideRecentlyAddedApps: boolean;
  startMenuHideRestartOptions: boolean;
  startMenuHideShutDown: boolean;
  startMenuHideSignOut: boolean;
  startMenuHideSleep: boolean;
  startMenuHideSwitchAccount: boolean;
  startMenuHideUserTile: boolean;
  startMenuLayoutEdgeAssetsXml?: ArrayBuffer;
  startMenuLayoutXml?: ArrayBuffer;
  startMenuMode: WindowsStartMenuModeType;
  startMenuPinnedFolderDocuments: VisibilitySetting;
  startMenuPinnedFolderDownloads: VisibilitySetting;
  startMenuPinnedFolderFileExplorer: VisibilitySetting;
  startMenuPinnedFolderHomeGroup: VisibilitySetting;
  startMenuPinnedFolderMusic: VisibilitySetting;
  startMenuPinnedFolderNetwork: VisibilitySetting;
  startMenuPinnedFolderPersonalFolder: VisibilitySetting;
  startMenuPinnedFolderPictures: VisibilitySetting;
  startMenuPinnedFolderSettings: VisibilitySetting;
  startMenuPinnedFolderVideos: VisibilitySetting;
  storageBlockRemovableStorage: boolean;
  storageRequireMobileDeviceEncryption: boolean;
  storageRestrictAppDataToSystemVolume: boolean;
  storageRestrictAppInstallToSystemVolume: boolean;
  tenantLockdownRequireNetworkDuringOutOfBoxExperience: boolean;
  usbBlocked: boolean;
  voiceRecordingBlocked: boolean;
  webRtcBlockLocalhostIpAddress: boolean;
  wiFiBlockAutomaticConnectHotspots: boolean;
  wiFiBlocked: boolean;
  wiFiBlockManualConfiguration: boolean;
  wiFiScanInterval?: number;
  windowsSpotlightBlockConsumerSpecificFeatures: boolean;
  windowsSpotlightBlocked: boolean;
  windowsSpotlightBlockOnActionCenter: boolean;
  windowsSpotlightBlockTailoredExperiences: boolean;
  windowsSpotlightBlockThirdPartyNotifications: boolean;
  windowsSpotlightBlockWelcomeExperience: boolean;
  windowsSpotlightBlockWindowsTips: boolean;
  windowsSpotlightConfigureOnLockScreen: WindowsSpotlightEnablementSettings;
  windowsStoreBlockAutoUpdate: boolean;
  windowsStoreBlocked: boolean;
  windowsStoreEnablePrivateStoreOnly: boolean;
  wirelessDisplayBlockProjectionToThisDevice: boolean;
  wirelessDisplayBlockUserInputFromReceiver: boolean;
  wirelessDisplayRequirePinForPairing: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}