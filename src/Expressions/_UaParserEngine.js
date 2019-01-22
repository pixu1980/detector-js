const engine = [[

  /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
], [VERSION, [NAME, 'EdgeHTML']], [

  /webkit\/537\.36.+chrome\/(?!27)/i                                  // Blink
], [[NAME, 'Blink']], [

  /(presto)\/([\w\.]+)/i,                                             // Presto
  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
  // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
  /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
  /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
], [NAME, VERSION], [

  /rv\:([\w\.]{1,9}).+(gecko)/i                                       // Gecko
], [VERSION, NAME]
];
