// packages/feature/lib/feature.js
import { Asserts as Asserts3, CssFlagsClass as CssFlagsClass3 } from "@detector-js/core";

// packages/feature/lib/webAPIs.js
var WEB_API_GLOBALS = [
  "AbortController",
  "AbortSignal",
  "AbsoluteOrientationSensor",
  "AbstractRange",
  "Accelerometer",
  "AesCbcParams",
  "AesCtrParams",
  "AesDerivedKeyParams",
  "AesGcmParams",
  "AesKeyGenParams",
  "AmbientLightSensor",
  "AnalyserNode",
  "Animation",
  "AnimationEffect",
  "AnimationEvent",
  "AnimationPlaybackEvent",
  "AnimationTimeline",
  "Attr",
  "AudioBuffer",
  "AudioBufferSourceNode",
  "AudioContext",
  "AudioData",
  "AudioDecoder",
  "AudioDestinationNode",
  "AudioEncoder",
  "AudioListener",
  "AudioNode",
  "AudioParam",
  "AudioParamDescriptor",
  "AudioParamMap",
  "AudioPlaybackStats",
  "AudioProcessingEvent",
  "AudioScheduledSourceNode",
  "AudioSession",
  "AudioSinkInfo",
  "AudioTrack",
  "AudioTrackList",
  "AudioWorklet",
  "AudioWorkletGlobalScope",
  "AudioWorkletNode",
  "AudioWorkletProcessor",
  "AuthenticatorAssertionResponse",
  "AuthenticatorAttestationResponse",
  "AuthenticatorResponse",
  "BackgroundFetchEvent",
  "BackgroundFetchManager",
  "BackgroundFetchRecord",
  "BackgroundFetchRegistration",
  "BackgroundFetchUpdateUIEvent",
  "BarProp",
  "BarcodeDetector",
  "BaseAudioContext",
  "BatteryManager",
  "BeforeInstallPromptEvent",
  "BeforeUnloadEvent",
  "BiquadFilterNode",
  "Blob",
  "BlobEvent",
  "BluetoothCharacteristicProperties",
  "BluetoothDevice",
  "BluetoothRemoteGATTCharacteristic",
  "BluetoothRemoteGATTDescriptor",
  "BluetoothRemoteGATTServer",
  "BluetoothRemoteGATTService",
  "BluetoothUUID",
  "BrowserCaptureMediaStreamTrack",
  "BufferedChangeEvent",
  "ByteLengthQueuingStrategy",
  "CDATASection",
  "COEPViolationReport",
  "CSPViolationReport",
  "CSS",
  "CSSAnimation",
  "CSSConditionRule",
  "CSSContainerRule",
  "CSSCounterStyleRule",
  "CSSFontFaceDescriptors",
  "CSSFontFaceRule",
  "CSSFontFeatureValuesMap",
  "CSSFontFeatureValuesRule",
  "CSSFontPaletteValuesRule",
  "CSSFunctionDeclarations",
  "CSSFunctionDescriptors",
  "CSSFunctionRule",
  "CSSGroupingRule",
  "CSSImageValue",
  "CSSImportRule",
  "CSSKeyframeRule",
  "CSSKeyframesRule",
  "CSSKeywordValue",
  "CSSLayerBlockRule",
  "CSSLayerStatementRule",
  "CSSMathClamp",
  "CSSMathInvert",
  "CSSMathMax",
  "CSSMathMin",
  "CSSMathNegate",
  "CSSMathProduct",
  "CSSMathSum",
  "CSSMathValue",
  "CSSMatrixComponent",
  "CSSMediaRule",
  "CSSNamespaceRule",
  "CSSNestedDeclarations",
  "CSSNumericArray",
  "CSSNumericValue",
  "CSSPageDescriptors",
  "CSSPageRule",
  "CSSPerspective",
  "CSSPositionTryDescriptors",
  "CSSPositionTryRule",
  "CSSPositionValue",
  "CSSPrimitiveValue",
  "CSSPropertyRule",
  "CSSPseudoElement",
  "CSSRotate",
  "CSSRule",
  "CSSRuleList",
  "CSSScale",
  "CSSScopeRule",
  "CSSSkew",
  "CSSSkewX",
  "CSSSkewY",
  "CSSStartingStyleRule",
  "CSSStyleDeclaration",
  "CSSStyleProperties",
  "CSSStyleRule",
  "CSSStyleSheet",
  "CSSStyleValue",
  "CSSSupportsRule",
  "CSSTransformComponent",
  "CSSTransformValue",
  "CSSTransition",
  "CSSTranslate",
  "CSSUnitValue",
  "CSSUnparsedValue",
  "CSSValue",
  "CSSValueList",
  "CSSVariableReferenceValue",
  "CSSViewTransitionRule",
  "Cache",
  "CacheStorage",
  "CanMakePaymentEvent",
  "CanvasCaptureMediaStreamTrack",
  "CanvasGradient",
  "CanvasPattern",
  "CanvasRenderingContext2D",
  "CaptureController",
  "CaretPosition",
  "ChannelMergerNode",
  "ChannelSplitterNode",
  "ChapterInformation",
  "CharacterBoundsUpdateEvent",
  "CharacterData",
  "Client",
  "Clients",
  "ClipboardChangeEvent",
  "ClipboardEvent",
  "ClipboardItem",
  "CloseEvent",
  "CloseWatcher",
  "CommandEvent",
  "Comment",
  "CompositionEvent",
  "CompressionStream",
  "ConstantSourceNode",
  "ContactAddress",
  "ContactsManager",
  "ContentIndex",
  "ContentIndexEvent",
  "ContentVisibilityAutoStateChangeEvent",
  "ConvolverNode",
  "CookieChangeEvent",
  "CookieStore",
  "CookieStoreManager",
  "CountQueuingStrategy",
  "CrashReport",
  "CrashReportContext",
  "CreateMonitor",
  "Credential",
  "CredentialsContainer",
  "CropTarget",
  "Crypto",
  "CryptoKey",
  "CryptoKeyPair",
  "CustomElementRegistry",
  "CustomEvent",
  "CustomStateSet",
  "DOMError",
  "DOMException",
  "DOMHighResTimeStamp",
  "DOMImplementation",
  "DOMMatrix",
  "DOMMatrixReadOnly",
  "DOMParser",
  "DOMPoint",
  "DOMPointReadOnly",
  "DOMQuad",
  "DOMRect",
  "DOMRectList",
  "DOMRectReadOnly",
  "DOMStringList",
  "DOMStringMap",
  "DOMTokenList",
  "DataCue",
  "DataTransfer",
  "DataTransferItem",
  "DataTransferItemList",
  "DecompressionStream",
  "DedicatedWorkerGlobalScope",
  "DeferredRequestInit",
  "DelayNode",
  "DelegatedInkTrailPresenter",
  "DeprecationReport",
  "DeviceMotionEvent",
  "DeviceMotionEventAcceleration",
  "DeviceMotionEventRotationRate",
  "DeviceOrientationEvent",
  "DevicePosture",
  "DirectoryEntrySync",
  "DirectoryReaderSync",
  "Document",
  "DocumentFragment",
  "DocumentPictureInPicture",
  "DocumentPictureInPictureEvent",
  "DocumentTimeline",
  "DocumentType",
  "DragEvent",
  "DynamicsCompressorNode",
  "EcKeyGenParams",
  "EcKeyImportParams",
  "EcdhKeyDeriveParams",
  "EcdsaParams",
  "EditContext",
  "Element",
  "ElementInternals",
  "EncodedAudioChunk",
  "EncodedVideoChunk",
  "ErrorEvent",
  "Event",
  "EventCounts",
  "EventSource",
  "EventTarget",
  "ExtendableCookieChangeEvent",
  "ExtendableEvent",
  "ExtendableMessageEvent",
  "EyeDropper",
  "FeaturePolicy",
  "FederatedCredential",
  "FederatedCredentialInit",
  "Fence",
  "FencedFrameConfig",
  "FetchEvent",
  "FetchLaterResult",
  "FileEntrySync",
  "FileList",
  "FileReader",
  "FileReaderSync",
  "FileSystemChangeRecord",
  "FileSystemDirectoryEntry",
  "FileSystemDirectoryHandle",
  "FileSystemDirectoryReader",
  "FileSystemEntry",
  "FileSystemFileEntry",
  "FileSystemFileHandle",
  "FileSystemHandle",
  "FileSystemObserver",
  "FileSystemSync",
  "FileSystemSyncAccessHandle",
  "FileSystemWritableFileStream",
  "FocusEvent",
  "FontData",
  "FontFace",
  "FontFaceSet",
  "FontFaceSetLoadEvent",
  "FormData",
  "FormDataEvent",
  "FragmentDirective",
  "GPU",
  "GPUAdapter",
  "GPUAdapterInfo",
  "GPUBindGroup",
  "GPUBindGroupLayout",
  "GPUBuffer",
  "GPUCanvasContext",
  "GPUCommandBuffer",
  "GPUCommandEncoder",
  "GPUCompilationInfo",
  "GPUCompilationMessage",
  "GPUComputePassEncoder",
  "GPUComputePipeline",
  "GPUDevice",
  "GPUDeviceLostInfo",
  "GPUError",
  "GPUExternalTexture",
  "GPUInternalError",
  "GPUOutOfMemoryError",
  "GPUPipelineError",
  "GPUPipelineLayout",
  "GPUQuerySet",
  "GPUQueue",
  "GPURenderBundle",
  "GPURenderBundleEncoder",
  "GPURenderPassEncoder",
  "GPURenderPipeline",
  "GPUSampler",
  "GPUShaderModule",
  "GPUSupportedFeatures",
  "GPUSupportedLimits",
  "GPUTexture",
  "GPUTextureView",
  "GPUUncapturedErrorEvent",
  "GPUValidationError",
  "GainNode",
  "GamepadButton",
  "GamepadEvent",
  "GamepadHapticActuator",
  "GamepadPose",
  "GeolocationCoordinates",
  "GeolocationPosition",
  "GeolocationPositionError",
  "GestureEvent",
  "GravitySensor",
  "Gyroscope",
  "HID",
  "HIDConnectionEvent",
  "HIDDevice",
  "HIDInputReportEvent",
  "HMDVRDevice",
  "HTMLAllCollection",
  "HTMLAnchorElement",
  "HTMLAreaElement",
  "HTMLAudioElement",
  "HTMLBRElement",
  "HTMLBaseElement",
  "HTMLBodyElement",
  "HTMLButtonElement",
  "HTMLCanvasElement",
  "HTMLCollection",
  "HTMLDListElement",
  "HTMLDataElement",
  "HTMLDataListElement",
  "HTMLDetailsElement",
  "HTMLDialogElement",
  "HTMLDivElement",
  "HTMLDocument",
  "HTMLElement",
  "HTMLEmbedElement",
  "HTMLFencedFrameElement",
  "HTMLFieldSetElement",
  "HTMLFontElement",
  "HTMLFormControlsCollection",
  "HTMLFormElement",
  "HTMLFrameSetElement",
  "HTMLGeolocationElement",
  "HTMLHRElement",
  "HTMLHeadElement",
  "HTMLHeadingElement",
  "HTMLHtmlElement",
  "HTMLIFrameElement",
  "HTMLImageElement",
  "HTMLInputElement",
  "HTMLLIElement",
  "HTMLLabelElement",
  "HTMLLegendElement",
  "HTMLLinkElement",
  "HTMLMapElement",
  "HTMLMarqueeElement",
  "HTMLMediaElement",
  "HTMLMenuElement",
  "HTMLMetaElement",
  "HTMLMeterElement",
  "HTMLModElement",
  "HTMLOListElement",
  "HTMLObjectElement",
  "HTMLOptGroupElement",
  "HTMLOptionElement",
  "HTMLOptionsCollection",
  "HTMLOutputElement",
  "HTMLParagraphElement",
  "HTMLParamElement",
  "HTMLPictureElement",
  "HTMLPreElement",
  "HTMLProgressElement",
  "HTMLQuoteElement",
  "HTMLScriptElement",
  "HTMLSelectElement",
  "HTMLSelectedContentElement",
  "HTMLSlotElement",
  "HTMLSourceElement",
  "HTMLSpanElement",
  "HTMLStyleElement",
  "HTMLTableCaptionElement",
  "HTMLTableCellElement",
  "HTMLTableColElement",
  "HTMLTableElement",
  "HTMLTableRowElement",
  "HTMLTableSectionElement",
  "HTMLTemplateElement",
  "HTMLTextAreaElement",
  "HTMLTimeElement",
  "HTMLTitleElement",
  "HTMLTrackElement",
  "HTMLUListElement",
  "HTMLUnknownElement",
  "HTMLVideoElement",
  "HashChangeEvent",
  "Headers",
  "Highlight",
  "HighlightRegistry",
  "History",
  "HkdfParams",
  "HmacImportParams",
  "HmacKeyGenParams",
  "IDBCursor",
  "IDBCursorWithValue",
  "IDBDatabase",
  "IDBFactory",
  "IDBIndex",
  "IDBKeyRange",
  "IDBObjectStore",
  "IDBOpenDBRequest",
  "IDBRecord",
  "IDBRequest",
  "IDBTransaction",
  "IDBVersionChangeEvent",
  "IIRFilterNode",
  "IdentityCredential",
  "IdentityCredentialError",
  "IdentityCredentialRequestOptions",
  "IdentityProvider",
  "IdleDeadline",
  "IdleDetector",
  "ImageBitmap",
  "ImageBitmapRenderingContext",
  "ImageCapture",
  "ImageData",
  "ImageDecoder",
  "ImageTrack",
  "ImageTrackList",
  "Ink",
  "InputDeviceCapabilities",
  "InputDeviceInfo",
  "InputEvent",
  "InstallEvent",
  "IntegrityViolationReport",
  "InteractionContentfulPaint",
  "InterestEvent",
  "IntersectionObserverEntry",
  "InterventionReport",
  "Keyboard",
  "KeyboardEvent",
  "KeyboardLayoutMap",
  "KeyframeEffect",
  "LanguageDetector",
  "LanguageModel",
  "LargestContentfulPaint",
  "LaunchParams",
  "LaunchQueue",
  "LayoutShift",
  "LayoutShiftAttribution",
  "LinearAccelerationSensor",
  "Location",
  "Lock",
  "LockManager",
  "MIDIAccess",
  "MIDIConnectionEvent",
  "MIDIInput",
  "MIDIInputMap",
  "MIDIMessageEvent",
  "MIDIOutput",
  "MIDIOutputMap",
  "MIDIPort",
  "Magnetometer",
  "ManagedMediaSource",
  "ManagedSourceBuffer",
  "MathMLElement",
  "MediaDeviceInfo",
  "MediaDevices",
  "MediaElementAudioSourceNode",
  "MediaEncryptedEvent",
  "MediaError",
  "MediaKeyMessageEvent",
  "MediaKeySession",
  "MediaKeyStatusMap",
  "MediaKeySystemAccess",
  "MediaKeys",
  "MediaList",
  "MediaMetadata",
  "MediaQueryList",
  "MediaQueryListEvent",
  "MediaRecorderErrorEvent",
  "MediaSource",
  "MediaSourceHandle",
  "MediaStream",
  "MediaStreamAudioDestinationNode",
  "MediaStreamAudioSourceNode",
  "MediaStreamEvent",
  "MediaStreamTrack",
  "MediaStreamTrackAudioSourceNode",
  "MediaStreamTrackEvent",
  "MediaStreamTrackGenerator",
  "MediaStreamTrackProcessor",
  "MediaTrackConstraints",
  "MediaTrackSettings",
  "MediaTrackSupportedConstraints",
  "MerchantValidationEvent",
  "MessageChannel",
  "MessageEvent",
  "MessagePort",
  "Metadata",
  "MimeType",
  "MimeTypeArray",
  "MouseEvent",
  "MouseScrollEvent",
  "MutationEvent",
  "MutationObserver",
  "MutationRecord",
  "NDEFMessage",
  "NDEFReader",
  "NDEFReadingEvent",
  "NDEFRecord",
  "NamedNodeMap",
  "NavigateEvent",
  "Navigation",
  "NavigationActivation",
  "NavigationCurrentEntryChangeEvent",
  "NavigationDestination",
  "NavigationHistoryEntry",
  "NavigationPrecommitController",
  "NavigationPreloadManager",
  "NavigationTransition",
  "Navigator",
  "NavigatorLogin",
  "NavigatorUAData",
  "NetworkInformation",
  "Node",
  "NodeIterator",
  "NodeList",
  "NotRestoredReasonDetails",
  "NotRestoredReasons",
  "Notification",
  "NotificationEvent",
  "OTPCredential",
  "OfflineAudioCompletionEvent",
  "OfflineAudioContext",
  "OffscreenCanvasRenderingContext2D",
  "OrientationSensor",
  "OscillatorNode",
  "OverconstrainedError",
  "PageRevealEvent",
  "PageSwapEvent",
  "PageTransitionEvent",
  "PaintRenderingContext2D",
  "PaintSize",
  "PaintWorkletGlobalScope",
  "PannerNode",
  "PasswordCredential",
  "PasswordCredentialInit",
  "Path2D",
  "PaymentAddress",
  "PaymentManager",
  "PaymentMethodChangeEvent",
  "PaymentRequestEvent",
  "PaymentRequestUpdateEvent",
  "PaymentResponse",
  "Pbkdf2Params",
  "Performance",
  "PerformanceElementTiming",
  "PerformanceEntry",
  "PerformanceEventTiming",
  "PerformanceLongAnimationFrameTiming",
  "PerformanceLongTaskTiming",
  "PerformanceMark",
  "PerformanceMeasure",
  "PerformanceNavigation",
  "PerformanceNavigationTiming",
  "PerformanceObserver",
  "PerformanceObserverEntryList",
  "PerformancePaintTiming",
  "PerformanceResourceTiming",
  "PerformanceScriptTiming",
  "PerformanceServerTiming",
  "PerformanceSoftNavigation",
  "PerformanceTiming",
  "PerformanceTimingConfidence",
  "PeriodicSyncEvent",
  "PeriodicSyncManager",
  "PeriodicWave",
  "PermissionStatus",
  "PermissionsPolicyViolationReport",
  "PictureInPictureEvent",
  "PictureInPictureWindow",
  "Plugin",
  "PluginArray",
  "PointerEvent",
  "PopStateEvent",
  "PositionSensorVRDevice",
  "PreferenceManager",
  "PreferenceObject",
  "Presentation",
  "PresentationAvailability",
  "PresentationConnection",
  "PresentationConnectionAvailableEvent",
  "PresentationConnectionCloseEvent",
  "PresentationConnectionList",
  "PresentationReceiver",
  "PresentationRequest",
  "PressureObserver",
  "PressureRecord",
  "ProcessingInstruction",
  "Profiler",
  "ProgressEvent",
  "PromiseRejectionEvent",
  "PublicKeyCredential",
  "PublicKeyCredentialCreationOptions",
  "PublicKeyCredentialRequestOptions",
  "PushEvent",
  "PushManager",
  "PushMessageData",
  "PushSubscription",
  "PushSubscriptionOptions",
  "QuotaExceededError",
  "RTCAudioSourceStats",
  "RTCCertificate",
  "RTCCertificateStats",
  "RTCCodecStats",
  "RTCDTMFSender",
  "RTCDTMFToneChangeEvent",
  "RTCDataChannel",
  "RTCDataChannelEvent",
  "RTCDataChannelStats",
  "RTCDtlsTransport",
  "RTCEncodedAudioFrame",
  "RTCEncodedVideoFrame",
  "RTCError",
  "RTCErrorEvent",
  "RTCIceCandidate",
  "RTCIceCandidatePair",
  "RTCIceCandidatePairStats",
  "RTCIceCandidateStats",
  "RTCIceParameters",
  "RTCIceTransport",
  "RTCIdentityAssertion",
  "RTCInboundRtpStreamStats",
  "RTCOutboundRtpStreamStats",
  "RTCPeerConnection",
  "RTCPeerConnectionIceErrorEvent",
  "RTCPeerConnectionIceEvent",
  "RTCPeerConnectionStats",
  "RTCRemoteInboundRtpStreamStats",
  "RTCRemoteOutboundRtpStreamStats",
  "RTCRtpReceiver",
  "RTCRtpScriptTransform",
  "RTCRtpScriptTransformer",
  "RTCRtpSender",
  "RTCRtpTransceiver",
  "RTCSctpTransport",
  "RTCSessionDescription",
  "RTCStatsReport",
  "RTCTrackEvent",
  "RTCTransformEvent",
  "RTCTransportStats",
  "RTCVideoSourceStats",
  "RadioNodeList",
  "Range",
  "ReadableByteStreamController",
  "ReadableStream",
  "ReadableStreamBYOBReader",
  "ReadableStreamBYOBRequest",
  "ReadableStreamDefaultController",
  "ReadableStreamDefaultReader",
  "RelativeOrientationSensor",
  "RemotePlayback",
  "ReportingObserver",
  "Request",
  "RequestInit",
  "ResizeObserverEntry",
  "ResizeObserverSize",
  "Response",
  "RestrictionTarget",
  "RsaHashedImportParams",
  "RsaHashedKeyGenParams",
  "RsaOaepParams",
  "RsaPssParams",
  "SVGAElement",
  "SVGAngle",
  "SVGAnimateColorElement",
  "SVGAnimateElement",
  "SVGAnimateMotionElement",
  "SVGAnimateTransformElement",
  "SVGAnimatedAngle",
  "SVGAnimatedBoolean",
  "SVGAnimatedEnumeration",
  "SVGAnimatedInteger",
  "SVGAnimatedLength",
  "SVGAnimatedLengthList",
  "SVGAnimatedNumber",
  "SVGAnimatedNumberList",
  "SVGAnimatedPreserveAspectRatio",
  "SVGAnimatedRect",
  "SVGAnimatedString",
  "SVGAnimatedTransformList",
  "SVGAnimationElement",
  "SVGCircleElement",
  "SVGClipPathElement",
  "SVGComponentTransferFunctionElement",
  "SVGDefsElement",
  "SVGDescElement",
  "SVGDiscardElement",
  "SVGElement",
  "SVGEllipseElement",
  "SVGFEBlendElement",
  "SVGFEColorMatrixElement",
  "SVGFEComponentTransferElement",
  "SVGFECompositeElement",
  "SVGFEConvolveMatrixElement",
  "SVGFEDiffuseLightingElement",
  "SVGFEDisplacementMapElement",
  "SVGFEDistantLightElement",
  "SVGFEDropShadowElement",
  "SVGFEFloodElement",
  "SVGFEFuncAElement",
  "SVGFEFuncBElement",
  "SVGFEFuncGElement",
  "SVGFEFuncRElement",
  "SVGFEGaussianBlurElement",
  "SVGFEImageElement",
  "SVGFEMergeElement",
  "SVGFEMergeNodeElement",
  "SVGFEMorphologyElement",
  "SVGFEOffsetElement",
  "SVGFEPointLightElement",
  "SVGFESpecularLightingElement",
  "SVGFESpotLightElement",
  "SVGFETileElement",
  "SVGFETurbulenceElement",
  "SVGFilterElement",
  "SVGForeignObjectElement",
  "SVGGElement",
  "SVGGeometryElement",
  "SVGGradientElement",
  "SVGGraphicsElement",
  "SVGImageElement",
  "SVGLength",
  "SVGLengthList",
  "SVGLineElement",
  "SVGLinearGradientElement",
  "SVGMPathElement",
  "SVGMarkerElement",
  "SVGMaskElement",
  "SVGMetadataElement",
  "SVGNumber",
  "SVGNumberList",
  "SVGPathElement",
  "SVGPatternElement",
  "SVGPoint",
  "SVGPointList",
  "SVGPolygonElement",
  "SVGPolylineElement",
  "SVGPreserveAspectRatio",
  "SVGRadialGradientElement",
  "SVGRect",
  "SVGRectElement",
  "SVGSVGElement",
  "SVGScriptElement",
  "SVGSetElement",
  "SVGStopElement",
  "SVGStringList",
  "SVGStyleElement",
  "SVGSwitchElement",
  "SVGSymbolElement",
  "SVGTSpanElement",
  "SVGTextContentElement",
  "SVGTextElement",
  "SVGTextPathElement",
  "SVGTextPositioningElement",
  "SVGTitleElement",
  "SVGTransform",
  "SVGTransformList",
  "SVGUnitTypes",
  "SVGUseElement",
  "SVGViewElement",
  "Sanitizer",
  "SanitizerConfig",
  "Scheduler",
  "Scheduling",
  "Screen",
  "ScreenDetailed",
  "ScreenDetails",
  "ScreenOrientation",
  "ScriptProcessorNode",
  "ScrollTimeline",
  "SecurePaymentConfirmationRequest",
  "SecurityPolicyViolationEvent",
  "Selection",
  "Sensor",
  "SensorErrorEvent",
  "SerialPort",
  "ServiceWorkerContainer",
  "ServiceWorkerGlobalScope",
  "ServiceWorkerRegistration",
  "ShadowRoot",
  "SharedStorage",
  "SharedStorageOperation",
  "SharedStorageRunOperation",
  "SharedStorageSelectURLOperation",
  "SharedStorageWorklet",
  "SharedStorageWorkletGlobalScope",
  "SharedWorker",
  "SharedWorkerGlobalScope",
  "SnapEvent",
  "SourceBuffer",
  "SourceBufferList",
  "SpeechGrammar",
  "SpeechGrammarList",
  "SpeechRecognition",
  "SpeechRecognitionAlternative",
  "SpeechRecognitionErrorEvent",
  "SpeechRecognitionEvent",
  "SpeechRecognitionPhrase",
  "SpeechRecognitionResult",
  "SpeechRecognitionResultList",
  "SpeechSynthesisErrorEvent",
  "SpeechSynthesisEvent",
  "SpeechSynthesisUtterance",
  "SpeechSynthesisVoice",
  "StaticRange",
  "StereoPannerNode",
  "StorageAccessHandle",
  "StorageEvent",
  "StorageManager",
  "StylePropertyMap",
  "StylePropertyMapReadOnly",
  "StyleSheet",
  "StyleSheetList",
  "SubmitEvent",
  "SubtleCrypto",
  "Summarizer",
  "SyncEvent",
  "SyncManager",
  "TaskAttributionTiming",
  "TaskController",
  "TaskPriorityChangeEvent",
  "TaskSignal",
  "Text",
  "TextDecoder",
  "TextDecoderStream",
  "TextEncoder",
  "TextEncoderStream",
  "TextEvent",
  "TextFormat",
  "TextFormatUpdateEvent",
  "TextMetrics",
  "TextTrack",
  "TextTrackCue",
  "TextTrackCueList",
  "TextTrackList",
  "TextUpdateEvent",
  "TimeEvent",
  "TimeRanges",
  "ToggleEvent",
  "Touch",
  "TouchEvent",
  "TouchList",
  "TrackEvent",
  "TransformStream",
  "TransformStreamDefaultController",
  "TransitionEvent",
  "Translator",
  "TreeWalker",
  "TrustedHTML",
  "TrustedScript",
  "TrustedScriptURL",
  "TrustedTypePolicy",
  "TrustedTypePolicyFactory",
  "UIEvent",
  "URL",
  "URLPattern",
  "URLSearchParams",
  "USBAlternateInterface",
  "USBConfiguration",
  "USBConnectionEvent",
  "USBDevice",
  "USBEndpoint",
  "USBInTransferResult",
  "USBInterface",
  "USBIsochronousInTransferPacket",
  "USBIsochronousInTransferResult",
  "USBIsochronousOutTransferPacket",
  "USBIsochronousOutTransferResult",
  "USBOutTransferResult",
  "UserActivation",
  "VRDisplay",
  "VRDisplayCapabilities",
  "VRDisplayEvent",
  "VREyeParameters",
  "VRFieldOfView",
  "VRFrameData",
  "VRLayerInit",
  "VRPose",
  "VRStageParameters",
  "VTTCue",
  "VTTRegion",
  "ValidityState",
  "VideoColorSpace",
  "VideoDecoder",
  "VideoEncoder",
  "VideoFrame",
  "VideoPlaybackQuality",
  "VideoTrack",
  "VideoTrackGenerator",
  "VideoTrackList",
  "ViewTimeline",
  "ViewTransition",
  "ViewTransitionTypeSet",
  "Viewport",
  "VirtualKeyboard",
  "VisibilityStateEntry",
  "WGSLLanguageFeatures",
  "WakeLockSentinel",
  "WaveShaperNode",
  "WebGL2RenderingContext",
  "WebGLActiveInfo",
  "WebGLBuffer",
  "WebGLContextEvent",
  "WebGLFramebuffer",
  "WebGLObject",
  "WebGLProgram",
  "WebGLQuery",
  "WebGLRenderbuffer",
  "WebGLRenderingContext",
  "WebGLSampler",
  "WebGLShader",
  "WebGLShaderPrecisionFormat",
  "WebGLSync",
  "WebGLTexture",
  "WebGLTransformFeedback",
  "WebGLUniformLocation",
  "WebGLVertexArrayObject",
  "WebKitPoint",
  "WebSocketStream",
  "WebTransport",
  "WebTransportBidirectionalStream",
  "WebTransportDatagramDuplexStream",
  "WebTransportDatagramsWritable",
  "WebTransportError",
  "WebTransportReceiveStream",
  "WebTransportSendGroup",
  "WebTransportSendStream",
  "WheelEvent",
  "Window",
  "WindowClient",
  "WindowControlsOverlay",
  "WindowControlsOverlayGeometryChangeEvent",
  "WindowSharedStorage",
  "WorkerGlobalScope",
  "WorkerLocation",
  "WorkerNavigator",
  "Worklet",
  "WorkletGlobalScope",
  "WorkletSharedStorage",
  "WritableStream",
  "WritableStreamDefaultController",
  "WritableStreamDefaultWriter",
  "XMLDocument",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload",
  "XMLSerializer",
  "XPathEvaluator",
  "XPathExpression",
  "XPathResult",
  "XRAnchor",
  "XRAnchorSet",
  "XRBoundedReferenceSpace",
  "XRCPUDepthInformation",
  "XRCompositionLayer",
  "XRCubeLayer",
  "XRCylinderLayer",
  "XRDepthInformation",
  "XREquirectLayer",
  "XRFrame",
  "XRHand",
  "XRHitTestResult",
  "XRHitTestSource",
  "XRInputSource",
  "XRInputSourceArray",
  "XRInputSourceEvent",
  "XRInputSourcesChangeEvent",
  "XRJointPose",
  "XRJointSpace",
  "XRLayer",
  "XRLayerEvent",
  "XRLightEstimate",
  "XRLightProbe",
  "XRMediaBinding",
  "XRPose",
  "XRProjectionLayer",
  "XRQuadLayer",
  "XRRay",
  "XRReferenceSpace",
  "XRReferenceSpaceEvent",
  "XRRenderState",
  "XRRigidTransform",
  "XRSession",
  "XRSessionEvent",
  "XRSpace",
  "XRSubImage",
  "XRSystem",
  "XRTransientInputHitTestResult",
  "XRTransientInputHitTestSource",
  "XRView",
  "XRViewerPose",
  "XRViewport",
  "XRVisibilityMaskChangeEvent",
  "XRWebGLBinding",
  "XRWebGLDepthInformation",
  "XRWebGLLayer",
  "XRWebGLSubImage",
  "XSLTProcessor"
];

// packages/feature/lib/audioFeature.js
import { Asserts, CssFlagsClass } from "@detector-js/core";
var AudioFeature = class extends CssFlagsClass {
  /**
   * Creates an instance of AudioFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='audio']
   *
   * @memberOf AudioFeature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "audio") {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.context = this.getContext();
    this.formats = {
      mp3: this.getMp3(),
      webm: this.getWebm(),
      ogg: this.getOgg(),
      opus: this.getOpus(),
      wav: this.getWav(),
      m4a: this.getM4a()
    };
  }
  /**
   *
   *
   * @memberof AudioFeature
   */
  _createTestElements() {
    this._audioElement = this._document.createElement("audio");
  }
  // /**
  //  *
  //  *
  //  * @memberof AudioFeature
  //  */
  // _destroyTestElements() {
  //   this._audioElement = null;
  //   delete this._audioElement;
  // }
  /**
   *
   *
   * @readonly
   *
   * @memberOf AudioFeature
   */
  get supported() {
    return Asserts.all([
      "Audio" in this._root,
      "HTMLAudioElement" in this._root,
      "HTMLMediaElement" in this._root,
      () => !!this._audioElement && "canPlayType" in this._audioElement && this._audioElement instanceof this._root.HTMLAudioElement && this._audioElement instanceof this._root.HTMLMediaElement
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getContext() {
    return Asserts.one([
      "AudioContext" in this._root,
      "webkitAudioContext" in this._root
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getMp3() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType("audio/mpeg;").replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWebm() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOgg() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getOpus() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getWav() {
    return Asserts.all([
      () => this.supported && this._audioElement.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf AudioFeature
   */
  getM4a() {
    return Asserts.all([
      () => this.supported && (this._audioElement.canPlayType("audio/x-m4a;").replace(/^no$/, "") || this._audioElement.canPlayType("audio/aac;").replace(/^no$/, "")) !== ""
    ], true);
  }
};

// packages/feature/lib/videoFeature.js
import { Asserts as Asserts2, CssFlagsClass as CssFlagsClass2 } from "@detector-js/core";
var VideoFeature = class extends CssFlagsClass2 {
  /**
   * Creates an instance of VideoFeature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='video']
   *
   * @memberOf VideoFeature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "video") {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.formats = {
      mp4: this.getMp4(),
      ogv: this.getOgv(),
      webm: this.getWebm()
    };
  }
  /**
   *
   *
   * @memberof VideoFeature
   */
  _createTestElements() {
    this._videoElement = this._document.createElement("video");
  }
  // /**
  //  *
  //  *
  //  * @memberof VideoFeature
  //  */
  // _destroyTestElements() {
  //   this._viewElement = null;
  //   delete this._videoElement;
  // }
  /**
   *
   *
   * @readonly
   *
   * @memberOf VideoFeature
   */
  get supported() {
    return Asserts2.all([
      "HTMLVideoElement" in this._root,
      "HTMLMediaElement" in this._root,
      () => !!this._videoElement && "canPlayType" in this._videoElement && this._videoElement instanceof this._root.HTMLVideoElement && this._videoElement instanceof this._root.HTMLMediaElement
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getMp4() {
    return Asserts2.all([
      () => this.supported && this._videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getOgv() {
    return Asserts2.all([
      () => this.supported && this._videoElement.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/^no$/, "") !== ""
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf VideoFeature
   */
  getWebm() {
    return Asserts2.all([
      () => this.supported && this._videoElement.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") !== ""
    ], true);
  }
};

// packages/feature/lib/feature.js
var Feature = class extends CssFlagsClass3 {
  /**
   * Creates an instance of Feature.
   * @param {any} [ua=null]
   * @param {any} [flags={}]
   * @param {string} [cssFlagsPrefix='feature']
   *
   * @memberOf Feature
   */
  constructor(ua = null, flags = {}, cssFlagsPrefix = "feature") {
    super(ua, flags, cssFlagsPrefix);
    this._createTestElements();
    this.addEventListener = this.getAddEventListener();
    this.asyncScript = this.getAsyncScript();
    this.battery = this.getBattery();
    this.bluetooth = this.getBluetooth();
    this.broadcastChannel = this.getBroadcastChannel();
    this.caches = this.getCaches();
    this.clipboard = this.getClipboard();
    this.cors = this.getCors();
    this.credentials = this.getCredentials();
    this.deferScript = this.getDeferScript();
    this.fetch = this.getFetch();
    this.file = this.getFile();
    this.fileSystem = this.getFileSystem();
    this.fullscreen = this.getFullscreen();
    this.fullscreenKeyboard = this.getFullscreenKeyboard();
    this.gamepad = this.getGamepad();
    this.geolocation = this.getGeolocation();
    this.historyAPI = this.getHistoryAPI();
    this.indexedDB = this.getIndexedDB();
    this.intersectionObserver = this.getIntersectionObserver();
    this.littleEndian = this.getLittleEndian();
    this.localStorage = this.getLocalStorage();
    this.matchMedia = this.getMatchMedia();
    this.mediaCapabilities = this.getMediaCapabilities();
    this.mediaRecorder = this.getMediaRecorder();
    this.mediaSession = this.getMediaSession();
    this.nfc = this.getNFC();
    this.notifications = this.getNotifications();
    this.offscreenCanvas = this.getOffscreenCanvas();
    this.online = this.getOnline();
    this.paymentRequest = this.getPaymentRequest();
    this.permissions = this.getPermissions();
    this.querySelector = this.getQuerySelector();
    this.querySelectorAll = this.getQuerySelectorAll();
    this.resizeObserver = this.getResizeObserver();
    this.serial = this.getSerial();
    this.serviceWorker = this.getServiceWorker();
    this.speechSynthesis = this.getSpeechSynthesis();
    this.storage = this.getStorage();
    this.structuredClone = this.getStructuredClone();
    this.typedArray = this.getTypedArray();
    this.usb = this.getUSB();
    this.userMedia = this.getUserMedia();
    this.vibration = this.getVibration();
    this.visualViewport = this.getVisualViewport();
    this.wakeLock = this.getWakeLock();
    this.webAssembly = this.getWebAssembly();
    this.webAuthn = this.getWebAuthn();
    this.webCrypto = this.getWebCrypto();
    this.webLocks = this.getWebLocks();
    this.webRTC = this.getWebRTC();
    this.webShare = this.getWebShare();
    this.webSocket = this.getWebSocket();
    this.webXr = this.getWebXr();
    this.worker = this.getWorker();
    for (let i = 0; i < WEB_API_GLOBALS.length; i += 1) {
      const globalName = WEB_API_GLOBALS[i];
      const flag = globalName.toCamelCase();
      if (!(flag in this)) {
        this[flag] = this._probeGlobal(globalName);
      }
    }
  }
  /**
   * Probes whether a Web API interface is exposed on the global root
   * (window / globalThis / worker global). Safe mode, never throws.
   *
   * @param {string} globalName
   * @returns {boolean}
   *
   * @memberOf Feature
   */
  _probeGlobal(globalName) {
    return Asserts3.one([
      () => globalName in this._root && !!this._root[globalName]
    ], true);
  }
  /**
   * The MDN Web API catalog (windowGlobal names) used by the detector,
   * exposed for tooling/UIs (`featureFlag = globalName.toCamelCase()`,
   * `mdn = https://developer.mozilla.org/en-US/docs/Web/API/<globalName>`).
   *
   * @static
   * @returns {object}
   *
   * @memberOf Feature
   */
  static get APIS() {
    return {
      globals: WEB_API_GLOBALS
    };
  }
  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this._cssPrefixes]
   * @returns {string}
   *
   * @memberOf Feature
   */
  _getCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    prop = prop.toCamelCase();
    const prefixedProps = prefixes.map((item) => {
      return (item === "spec" ? "" : "-" + item + "-") + prop;
    });
    const prefixedPropsFound = prefixedProps.filter((item) => {
      return item in this._div.style;
    });
    if (prefixedPropsFound.length > 0) {
      return prefixedPropsFound[0];
    }
    return null;
  }
  /**
   *
   *
   * @param {any} prop
   * @param {any} [prefixes=this._cssPrefixes]
   * @returns {string}
   *
   * @memberOf Feature
   */
  _checkCssPrefixedProp(prop, prefixes = this._cssPrefixes) {
    return !!this._getCssPrefixedProp(prop, prefixes);
  }
  /**
   *
   *
   * @param {any} prop
   * @param {any} value
   * @returns {any}
   *
   * @memberOf Feature
   */
  _getCssPrefixedPropValue(prop, value) {
    const prefixedProp = this._getCssPrefixedProp(prop);
    if (prefixedProp) {
      this._document.body.insertBefore(this._div, null);
      this._div.style[prefixedProp] = value;
      const computedStylePropValue = this._root.getComputedStyle(this._div).getPropertyValue(prefixedProp);
      this._document.body.removeChild(this._div);
      if (!!computedStylePropValue && typeof computedStylePropValue === "string") {
        return computedStylePropValue;
      }
      return null;
    }
    return null;
  }
  /**
   *
   *
   * @param {any} prop
   * @param {any} value
   * @returns {any}
   *
   * @memberOf Feature
   */
  _checkCssPrefixedPropValue(prop, value) {
    const prefixedPropValue = this._getCssPrefixedPropValue(prop, value);
    return !!prefixedPropValue && prefixedPropValue !== "none";
  }
  /**
   *
   *
   * @memberof Feature
   */
  _createTestElements() {
    this._cssPrefixes = ["spec", "webkit", "moz", "ms", "o"];
    this._script = this._document.createElement("script");
    this._canvas = this._document.createElement("canvas");
    this._div = this._document.createElement("div");
    this._input = this._document.createElement("input");
    this._img = this._document.createElement("img");
    this._xmlHttpRequest = new this._root.XMLHttpRequest();
  }
  // /**
  //  *
  //  *
  //  * @memberof Feature
  //  */
  // _destroyTestElements() {
  //   this._cssPrefixes = null;
  //   this._script = null;
  //   this._canvas = null;
  //   this._div = null;
  //   this._input = null;
  //   this._img = null;
  //   this._xmlHttpRequest = null;
  //   delete this._cssPrefixes;
  //   delete this._script;
  //   delete this._canvas;
  //   delete this._div;
  //   delete this._input;
  //   delete this._img;
  //   delete this._xmlHttpRequest;
  // }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getAddEventListener() {
    return "addEventListener" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getAsyncScript() {
    return "async" in this._script;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getBattery() {
    return "battery" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getBluetooth() {
    return "bluetooth" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getBroadcastChannel() {
    return "BroadcastChannel" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getCaches() {
    return "caches" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getClipboard() {
    return "clipboard" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getCors() {
    return "XMLHttpRequest" in this._root && "withCredentials" in this._xmlHttpRequest;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getCredentials() {
    return "credentials" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getDeferScript() {
    return "defer" in this._script;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFile() {
    return Asserts3.all([
      "File" in this._root,
      "FileReader" in this._root,
      "FileList" in this._root,
      "Blob" in this._root
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFileSystem() {
    return "requestFileSystem" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFetch() {
    return "fetch" in this._root && typeof this._root.fetch === "function";
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFullscreen() {
    return Asserts3.one([
      "requestFullscreen" in this._canvas,
      "webkitRequestFullscreen" in this._canvas,
      "msRequestFullscreen" in this._canvas,
      "mozRequestFullScreen" in this._canvas
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getFullscreenKeyboard() {
    return Asserts3.all([
      () => "Element" in this._root && "ALLOW_KEYBOARD_INPUT" in this._root.Element
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getGeolocation() {
    return "geolocation" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getGamepad() {
    return "getGamepads" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getHistoryAPI() {
    return Asserts3.all([
      () => "history" in this._root && "pushState" in this._root.history
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getIndexedDB() {
    return "indexedDB" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getIntersectionObserver() {
    return "IntersectionObserver" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLittleEndian() {
    return Asserts3.all([
      this.getTypedArray.bind(this),
      () => new this._root.Int8Array(new this._root.Int16Array([1]).buffer)[0] > 0
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getLocalStorage() {
    return Asserts3.one([
      () => "localStorage" in this._root
    ], true) && Asserts3.one([
      () => {
        const test = "x";
        this._root.localStorage.setItem(test, test);
        this._root.localStorage.removeItem(test);
        return true;
      }
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMatchMedia() {
    return "matchMedia" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMediaCapabilities() {
    return "mediaCapabilities" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMediaRecorder() {
    return "MediaRecorder" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getMediaSession() {
    return "mediaSession" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getNFC() {
    return "nfc" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getNotifications() {
    return "Notification" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getOffscreenCanvas() {
    return "OffscreenCanvas" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getOnline() {
    return "onLine" in this._navigator && !!this._navigator.onLine;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getPaymentRequest() {
    return "PaymentRequest" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getPermissions() {
    return "permissions" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getQuerySelector() {
    return "querySelector" in this._document;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getQuerySelectorAll() {
    return "querySelectorAll" in this._document;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getResizeObserver() {
    return "ResizeObserver" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getSerial() {
    return "serial" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getSpeechSynthesis() {
    return "speechSynthesis" in this._navigator && "SpeechSynthesisUtterance" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getStorage() {
    return "storage" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getStructuredClone() {
    return "structuredClone" in this._root && typeof this._root.structuredClone === "function";
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getServiceWorker() {
    return "serviceWorker" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getTypedArray() {
    return Asserts3.all([
      () => "Int8Array" in this._root && typeof this._root.Int8Array !== "undefined"
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getUSB() {
    return "usb" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getUserMedia() {
    return Asserts3.one([
      "getUserMedia" in this._navigator,
      "webkitGetUserMedia" in this._navigator,
      "mozGetUserMedia" in this._navigator,
      "msGetUserMedia" in this._navigator
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getVibration() {
    return Asserts3.one([
      "vibrate" in this._navigator,
      "webkitVibrate" in this._navigator,
      "mozVibrate" in this._navigator,
      "msVibrate" in this._navigator
    ]);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getVisualViewport() {
    return "visualViewport" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWakeLock() {
    return "wakeLock" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebAssembly() {
    return "WebAssembly" in this._root && "compile" in this._root.WebAssembly;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebAuthn() {
    return "PublicKeyCredential" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebCrypto() {
    return Asserts3.all([
      "crypto" in this._root,
      () => "subtle" in this._root.crypto
    ], true);
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebLocks() {
    return "locks" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebRTC() {
    return "RTCPeerConnection" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebShare() {
    return "share" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebSocket() {
    return "WebSocket" in this._root;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWebXr() {
    return "xr" in this._navigator;
  }
  /**
   *
   *
   * @returns boolean
   *
   * @memberOf Feature
   */
  getWorker() {
    return "Worker" in this._root;
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerEnabled() {
    return Asserts3.one([
      "pointerEnabled" in this._navigator,
      "msPointerEnabled" in this._navigator
    ]);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pixelRatio() {
    return this._root.devicePixelRatio || 1;
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerLock() {
    return Asserts3.one([
      "pointerLockElement" in this._document,
      "webkitPointerLockElement" in this._document,
      "mozPointerLockElement" in this._document
    ]);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get quirksMode() {
    return this._document.compatMode !== "CSS1Compat";
  }
  /**
   * Test if CSS 3D transforms are supported
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get css3D() {
    return Asserts3.all([
      this._checkCssPrefixedPropValue.bind(this, "transform", "translate3d(1px,1px,1px)"),
      this._checkCssPrefixedProp.bind(this, "perspective")
    ], true);
  }
  // Test if CSS transforms are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get cssTransform() {
    return Asserts3.one([
      this._checkCssPrefixedProp.bind(this, "transform-origin")
    ], true);
  }
  // Test if CSS transitions are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get cssTransition() {
    return Asserts3.one([
      this._checkCssPrefixedProp.bind(this, "transition")
    ], true);
  }
  // Test if Device Motion is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get deviceMotion() {
    return "DeviceMotionEvent" in this._root;
  }
  // Test if Device Orientation is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get deviceOrientation() {
    return "DeviceOrientationEvent" in this._root;
  }
  // Test if Context Menu is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get contextMenu() {
    return Asserts3.all([
      "contextMenu" in this._document,
      "HTMLMenuItemElement" in this._root
    ]);
  }
  // Test if classList API is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get classList() {
    return "classList" in this._document;
  }
  // Test if placeholder attribute is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get placeholder() {
    return "placeholder" in this._input;
  }
  // Test if viewport units are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get viewportUnit() {
    return Asserts3.all([
      () => this._img.style.width = this._img.style.width !== ""
    ], true);
  }
  // Test if REM units are supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get remUnit() {
    return Asserts3.all([
      () => this._img.style.width = this._img.style.width !== ""
    ], true);
  }
  // Test if Canvas is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get canvas() {
    return Asserts3.all([
      () => "getContext" in this._canvas && !!this._canvas.getContext("2d")
    ], true);
  }
  // Test if SVG is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get svg() {
    return Asserts3.all([
      () => "createElementNS" in this._document && "createSVGRect" in this._document.createElementNS("http://www.w3.org/2000/svg", "svg")
    ], true);
  }
  // Test if WebP is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webp() {
    return Asserts3.all([
      () => {
        const elem = document.createElement("canvas");
        if (!!(elem.getContext && elem.getContext("2d"))) {
          return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
        }
        return false;
      }
    ], true);
  }
  // Test if WebGL is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webGL() {
    return Asserts3.one([
      () => this.canvas && "WebGLRenderingContext" in this._root && (this._canvas.getContext("webgl") || this._canvas.getContext("experimental-webgl")),
      () => this.canvas && "WebGL2RenderingContext" in this._root && this._canvas.getContext("webgl2")
    ], true);
  }
  // Test if WebVR is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webVR() {
    return Asserts3.all([
      "getVRDisplays" in this._navigator
    ]);
  }
  // Tests if touch events are supported, but doesn't necessarily reflect a touchscreen device
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get touch() {
    return Asserts3.one([
      () => "ontouchstart" in this._root,
      () => "ontouchstart" in this._document.documentElement
    ], true) && Asserts3.one([
      () => "DocumentTouch" in this._root && this._document instanceof this._root.DocumentTouch,
      () => this.pointerEnabled && "MSGesture" in this._root,
      () => "maxTouchPoints" in this._navigator && this._navigator.maxTouchPoints > 1
    ], true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get forceTouch() {
    return Asserts3.all([
      () => "MouseEvent" in this._root && "WEBKIT_FORCE_AT_MOUSE_DOWN" in this._root.MouseEvent && "WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN" in this._root.MouseEvent
    ], true);
  }
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pointerEvents() {
    return Asserts3.all([
      !!this._root.PointerEvent
    ], true);
  }
  // Test if img srcset attribute is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get srcset() {
    return "srcset" in this._img;
  }
  // Test if img sizes attribute is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get sizes() {
    return "sizes" in this._img;
  }
  // Test if Picture element is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get pictureElement() {
    return "HTMLPictureElement" in this._root;
  }
  // Test if Picture element is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get dialogElement() {
    return "HTMLDialogElement" in this._root;
  }
  // Test if WebGL2 is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webGL2() {
    return Asserts3.one([
      () => this.canvas && "WebGL2RenderingContext" in this._root && !!this._canvas.getContext("webgl2")
    ], true);
  }
  // Test if WebGPU is supported
  /**
   *
   *
   * @readonly
   *
   * @memberOf Feature
   */
  get webGPU() {
    return Asserts3.one([
      () => "gpu" in this._navigator && !!this._navigator.gpu && typeof this._navigator.gpu.requestAdapter === "function"
    ], true);
  }
  // Test if the Device Memory API reports a value (in GB)
  /**
   *
   *
   * @readonly
   * @returns {number|string}
   *
   * @memberOf Feature
   */
  get deviceMemory() {
    return this._navigator.deviceMemory || "n/a";
  }
  // Test the maximum number of simultaneous touch contact points
  /**
   *
   *
   * @readonly
   * @returns {number}
   *
   * @memberOf Feature
   */
  get touchPoints() {
    return this._navigator.maxTouchPoints || 0;
  }
};
if (typeof process !== "undefined" && process.env && true) {
  console.log("DetectorJS Feature Module v" + (true ? "3.0.0" : "0.0.0") + " initialized");
}
export {
  AudioFeature,
  Feature,
  VideoFeature
};
//! MDN Web API catalog (auto-generated from the MDN /docs/Web/API index):
//! every interface available on the global root becomes a feature flag.
//! Existing flags (above) are never shadowed.
//! Development-only startup log (upstream v2 behavior). The `__VERSION__`
//! placeholder is rewritten at build time (esbuild `define`).
//# sourceMappingURL=feature.mjs.map
