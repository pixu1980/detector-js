const cpu = [[

  /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
], [[ARCHITECTURE, 'amd64']], [

  /(ia32(?=;))/i                                                      // IA32 (quicktime)
], [[ARCHITECTURE, util.lowerize]], [

  /((?:i[346]|x)86)[;\)]/i                                            // IA32
], [[ARCHITECTURE, 'ia32']], [

  // PocketPC mistakenly identified as PowerPC
  /windows\s(ce|mobile);\sppc;/i
], [[ARCHITECTURE, 'arm']], [

  /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

  /(sun4\w)[;\)]/i                                                    // SPARC
], [[ARCHITECTURE, 'sparc']], [

  /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
  // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
], [[ARCHITECTURE, util.lowerize]]
];
