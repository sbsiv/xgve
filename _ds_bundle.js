/* @ds-bundle: {"format":4,"namespace":"XGVEDesignSystem_c9ef21","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressRing","sourcePath":"components/feedback/ProgressRing.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"archive/ascii-terminal/ascii-data.js":"744559d4279b","components/actions/Button.jsx":"d376706f9172","components/actions/IconButton.jsx":"5e4ff04a3ab7","components/data-display/Badge.jsx":"4671b26fddf3","components/data-display/Card.jsx":"a417a456eb38","components/data-display/Tag.jsx":"a555d3a5ee9f","components/feedback/Dialog.jsx":"0a6e8962b8b5","components/feedback/ProgressRing.jsx":"759cab208963","components/feedback/Toast.jsx":"05bdfbf2e415","components/feedback/Tooltip.jsx":"03d474462b18","components/forms/Checkbox.jsx":"bd456c1e793a","components/forms/Input.jsx":"531647352da3","components/forms/Radio.jsx":"68ff85bed02f","components/forms/Select.jsx":"97afa0f827d6","components/forms/Switch.jsx":"48aaf4a5e413","components/navigation/Tabs.jsx":"84f3bf2911cc","deploy/site/ascii-data.js":"129d4f7d4b40","deploy/site/tweaks-panel.jsx":"6591467622ed","deploy/site/xgve-ascii-emblem.js":"c71999b60e6d","deploy/site/xgve-asciifield.js":"8121d9daaccc","deploy/site/xgve-firestream.js":"e23e037b3321","deploy/site/xgve-foxglove-ghost.js":"544c8f56a412","deploy/site/xgve-foxglove.jsx":"2aa16bffd0fc","deploy/site/xgve-lockup.jsx":"5959dc0a04f4","deploy/site/xgve-masks.js":"ce90d730a360","deploy/site/xgve-site.jsx":"8884657ae3b5","deploy/site/xgve-windows.jsx":"14c6172ba313","deploy/site/xgve-work.jsx":"492fa8178981","design-handoff/ascii-foxglove/source/ascii-data.js":"129d4f7d4b40","design-handoff/ascii-foxglove/source/xgve-foxglove-ghost.js":"544c8f56a412","design-handoff/ascii-foxglove/source/xgve-foxglove.jsx":"2aa16bffd0fc","design-handoff/ascii-foxglove/source/xgve-windows.jsx":"14c6172ba313","site/ascii-data.js":"129d4f7d4b40","site/tweaks-panel.jsx":"6591467622ed","site/xgve-ascii-emblem.js":"c71999b60e6d","site/xgve-asciifield.js":"8121d9daaccc","site/xgve-firestream.js":"e23e037b3321","site/xgve-foxglove-ghost.js":"544c8f56a412","site/xgve-foxglove.jsx":"2aa16bffd0fc","site/xgve-lockup.jsx":"5959dc0a04f4","site/xgve-masks.js":"ce90d730a360","site/xgve-site.jsx":"4ee990e48877","site/xgve-windows.jsx":"b3770089c8cd","site/xgve-work.jsx":"492fa8178981","ui_kits/xgve-console/App.jsx":"ab10188efc0e","ui_kits/xgve-console/Console.jsx":"853fb4ee3e74","ui_kits/xgve-console/Login.jsx":"015f426851bb","ui_kits/xgve-console/icons.jsx":"e7f86e0fb7c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XGVEDesignSystem_c9ef21 = window.XGVEDesignSystem_c9ef21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// archive/ascii-terminal/ascii-data.js
try { (() => {
window.XG_ASCII = {
  "emblem": {
    "cols": 82,
    "rows": 35,
    "chars": ["                                                                                  ", "                                ;:;~!|-ir|-|;:                                    ", "                           ,:xw0Q@gNMNB&BNB$g@#w?r'                               ", "                       .rt$8$#@W0Q@35P%e9F#QXg&Q$#X86i`                           ", "                     +o&WH#$gS+;'            ,ir%XB$8&MS:                ,i`      ", "                   |wg$W0#;.                      `~##&M&8x'          ,|>:   LE.  ", "   `.            -8N8@Q7.                            ,c@W0#&t       :>F+  :-:;:   ", "    `i?~;      .5W0B#:                                  +5Ng$w;  '<3#=    ,:;     ", "      '1M2i`  .0gX8+                                      =w1,:;FXS!   xQr        ", "        ;t&#oc!';L`                                         ,>XB@~  ,' ','        ", "           +g0WHjr'                                      ;i9MXgv:  +ga            ", "           ~`=EMN#0F?:                                 ~+gH#$t;    :`:            ", "          ~$Q! !FN#0#N8L|                           :v5X8@8t.                     ", "          oQH6   =3gNgNWHW>i,                    .-3NMXB$t,                       ", "         !Q$g+     ,?&W&#XgNM6?;              .-oNW&g0Mc.;:    ;~-|r|`            ", "         6NQ$'       .<93P55#e2#&?;         ,>H8080Q@t;|#=     E&M@B$M            ", "         $W&S     .rc+t>7tj?L1<wMNQ0%95wwwo2QXBHB&BF=+#&c      ,i-6X#N'           ", "         #XMF       !6aFPPFo59o20BHMc+j1t*@QX#XM$9!.?P-'          58HQ;           ", "         XM@e          !=r|;:-1$#@>;      .tBX#a|`'r:             5$B&.           ", "         SN8@.         '+jt+v*c??:          ;i;:                  HWHa            ", "         +QNM*                                                   !W@B>            ", "          #W0M,               `60j,        .x81:                 w&W&.            ", "          ~XMNa`            :xQ&#$#L.    ;+&8N#H?,              >$MN<             ", "           :@M&o          ,<$W@#&g0#@1 '7#HBX#Ng$QL:           =$QNo              ", "            >Ng$o`      .?Q$#$7, +F&#@MN#&#F. :LBXQH+;        i$#HS`              ", "             ~XB@8!    <N8N#!.     =38HgX6-     ;~2g@Q!:     *X8@S;               ", "              .9M@~  +gXg5|          !%e|          +5HgX:   wXQ$c                 ", "                !: ~5W@j`                            .>WX#+ `##~                  ", "                 rB$or `=                            `. |P#Ni                     ", "               |2W*' :%WXg?|`                     ;t$8XL` ;?&2-                   ", "             ;F#:     ~6W0W@g5t-~;          ';=>P0QNQHE*.    !9E=                 ", "           :+7;         ,:wQ&WHMNB@Q0P2%3QXgHWXgHB&w-.         :*>`               ", "         ,:;                '!xag@W$Q@W@gXW&#&2x:`                .`:             ", "                                  `'+=r:r~;'                                      ", "                                                                                  "],
    "colors": ["..................................................................................", "................................wwwwwwwwwwwwww....................................", "...........................wwwwwwwwwwwwwwwwwwwwwwww...............................", ".......................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........................", ".....................wwwwwwwwwwww............wwwwwwwwwwww................rrr......", "...................wwwwwwwww......................wwwwwwwwww..........rrrr...rrr..", "...ww............wwwwwwww............................wwwwwwww.......rrrr..rrrrr...", "....wwwww......wwwwwww..................................wwwwwww..rrrrr....rrr.....", "......wwwwww..wwwwww......................................wwwwrrrrrr...rrr........", "........wwwwwwwwwww.........................................rrrrrr..rr.rrr........", "...........wwwwwwww......................................rrrrrrrr..rrr............", "...........wwwwwwwwwww.................................rrrrrrrr....rrr............", "..........wwww.wwwwwwwwww...........................rrrrrrrrr.....................", "..........wwww...wwwwwwwwwwww....................rrrrrrrrrr.......................", ".........wwwww.....wwwwwwwwwwwww..............rrrrrrrrrrrrr....wwwwwww............", ".........wwwww.......wwwwwwwwwwwwww.........rrrrrrrrrrrrrr.....wwwwwww............", ".........wwww.....wwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrr......wwwwwwww...........", ".........wwww.......wwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrr..........wwwww...........", ".........wwww..........wwwwwwwwwwwww......rrrrrrrrrrr.............wwwww...........", ".........wwwww.........wwwwwwwwwww..........rrrr..................wwww............", ".........wwwww...................................................wwwww............", "..........wwwww...............wwwww........wwwww.................wwwww............", "..........wwwwww............wwwwwwwww....wwwwwwwww..............wwwww.............", "...........wwwww..........wwwwwwwwwwww.wwwwwwwwwwwww...........wwwww..............", "............wwwwww......wwwwwwww.wwwwwwwwwwww.wwwwwwww........wwwwww..............", ".............wwwwww....wwwwwww.....wwwwwwww.....wwwwwwww.....wwwwww...............", "..............wwwww..wwwwww..........wwww..........wwwwww...wwwww.................", "................ww.wwwwww............................wwwwww.wwww..................", ".................wwwww.ww............................ww.wwwww.....................", "...............wwwww.wwwwwwww.....................wwwwwww.wwwww...................", ".............wwww.....wwwwwwwwwwww..........wwwwwwwwwwwww....wwww.................", "...........wwww.........wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........wwww...............", ".........www................wwwwwwwwwwwwwwwwwwwwww................www.............", "..................................wwwwwwwwww......................................", ".................................................................................."]
  },
  "wordmark": {
    "cols": 120,
    "rows": 14,
    "chars": ["                                                                                                                        ", "  ,=w%Sa3ax:             :cxxj<><i;   `>waea9P3SP2SS5Ewe#a#aeo++>?cL!                  :t?<+L|    !S2PPSa556#5ow%w5%t.  ", "    'xBXMX#$x`         ;>&W0#Xwc:   'SB&BNB$g@#@B0BXQXM0gHg&5; ;20B$ML                |&BXB$*   =##&8@M@#NMHgH#$M$ML'   ", "      ;>$W@M@Q6:     'FW&g$8w=    ;3$WNM$L7tc?Lj1t<7<*v<>v*=    `%$#NW6.             =XW&W@~   |t?LLv7+<tt>v*ct*Lj`     ", "         ra0W@Q@1  ;5$W&WH+,      :HW0Wv                          <08XgE.           ?XBN8P:                             ", "           'cM3: ~HWNg$Wt.        -8HMN.                           vXMHM0:        ;#NQX8a.                              ", "               vW$8N8@<,          =&M&8,        +NM&WXB@W0#&Q0QL    :NM@B@=      ,9XQNM+    #0MNBNgHWX#&#H8@#w'         ", "             :0W@W0B!'+.          ;g$BN.       :%#&BHM0W@WNg$Q&6     .EQ&80+    ;6HgXW!     $#@MHBNM@W@B@B&M-           ", "          .jQXB0gEi;?NM&o`        :Hg@8;         ,|r~+=-i+=wgXg2      'aQN80L  !8H#$6,      B@#@L+:-=;i+i+i             ", "        ;t&#HBX3;  .>#&#$BE:      -g&M@:                   %$WX3        >W$QX%v8@#$%,       @BHg+                       ", "      '?BHg$gF|      ;tH80Q0P!    =0g@8$i,'`.,.`.,.`.;.,.;<NMXgw         rW&gX80Q0#`        8$Q$8a=`';.,'`.,.,.;:       ", "    ,10QN#@9!          .*W$#@Qe=   :XM@W$g@W&Q@8@W0Q&#HW$gH#$Wj:          +#XB&Q$x          ;*&MXQ@W&MHM$BHQ&QHQNM+     ", "  'j#@gHWE.              ;+$#NBX8r   !#0BX8@g0Q@BHB0MNMX8@8@2,             ,#0B&1             .tB&g0WH#$QNW0BNQ&Q&8N:   ", "  ;:,'`.;                   ,'`:;.     ',.`.`';',.`'`'`:;:,'                ;.`.                 ';',.,';:,';:`';:;:,   "],
    "colors": ["........................................................................................................................", "..wwwwwwwwww.............wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwwrrrrrr..................rrrrrrr....wwwwwwwwwwwwwwwwwwww..", "....wwwwwwwwww.........wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwww.wrrrrrr................rrrrrrr...wwwwwwwwwwwwwwwwwwwww...", "......wwwwwwwwww.....wwwwrrrrr....wwwwwwwwwwwwwwwwwwwwwwwwww....wrrrrrrw.............rrrrrrr...wwwwwwwwwwwwwwwwwwww.....", ".........wwwwwwww..wwwwwwwww......wwwwww..........................rrrrrrw...........rrrrrrw.............................", "...........wwwww.wwwwwwwww........wwwwww...........................rrrrrrr........wrrrrrrw..............................", "...............wwwwwwwww..........wwwwww........wwwwwwwwwwwwwwww....rrrrrrr......wrrrrrr....wwwwwwwwwwwwwwwwwww.........", ".............wwwwwwwwwww..........wwwwww.......wwwwwwwwwwwwwwwww.....wrrrrrr....rrrrrrr.....wwwwwwwwwwwwwwwww...........", "..........wwwwwwwwwwwwwwww........wwwwww.........wwwwwwwwwwwwwww......wrrrrrr..rrrrrrr......wwwwwwwwwwwwwww.............", "........wwwwwwwww..wwwwwwwww......wwwwww...................wwwww........rrrrrrrrrrrrw.......wwwww.......................", "......wwwwwwwww......wwwwwwwww....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........rrrrrrrrrrw........wwwwwwwwwwwwwwwwwwwww.......", "....wwwwwwwww..........wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwww..........rrrrrrrr..........wwwwwwwwwwwwwwwwwwwwwww.....", "..wwwwwwwww..............wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwww.............rrrrrr.............wwwwwwwwwwwwwwwwwwwwwww...", "..wwwwwww...................wwwwww.....wwwwwwwwwwwwwwwwwwwww................wwww.................wwwwwwwwwwwwwwwwwwww..."]
  },
  "foxglove": {
    "cols": 64,
    "rows": 59,
    "chars": ["                                                                ", "                                                                ", "                                 ,                              ", "                                -a                              ", "                                '5                              ", "                                ,o                              ", "                                .6                              ", "                                ,2,                             ", "                                 9:                             ", "                                 P6'                            ", "                                 %:                             ", "                               .7Q`                             ", "                               `7@:                             ", "                                 F!'                            ", "                                 a8X|                           ", "                                 a%:                            ", "                              '<xa|                             ", "                              `20Br                             ", "                               `*6:;=                           ", "                                 ?Hg$i                          ", "                                 vM@P`                          ", "                            `:j> jSE+i                          ", "                            cXQ&Fa##x`                          ", "                            `W@#&g!:`                           ", "                             rPX6o= :9L,                        ", "                              <9#W1wX8Hg;                       ", "                              :;:68N8&Mt                        ", "                           =;1P' j5W&Mt                         ", "                          'eB@8&|532S?'                         ", "                           jXQ08@M7~+'                          ", "                           ,P0#&Q0= =>3t.,                      ", "                            `oP5EBr10#Xg0<                      ", "                             !xti@W$Q@W@o;                      ", "                         '-+a%+  PHQ@QH#,                       ", "                         j8X8&#3'NP62&P;                        ", "                         10WXM$MeBL1%~`.                        ", "                         `SNM0Q&8o  .L23i`                      ", "                          `3@B@8S9;L&WHQ@M6                     ", "                           ,>oS5<H%&M$8XQN|                     ", "                       :-j3#N>` +#0g0BH8$t                      ", "                       jQ0M&#X6`|Xo$M$W0=                       ", "                       =NW@MXMNS16P9%E1i                        ", "                        2@Q@BHgX87 `co%Ne+'                     ", "                        ;a@#@QXB@~`+XW$B0#Xa                    ", "                         -#&M&#F#Sa&#NB0B0Q;                    ", "                     :+>L9&WF~`:e8X#H#HMHML                     ", "                     r#X80QXB#. 5$#&M$Q@Wv:                     ", "                     =HB@#0gH8%:&%28HW0gc                       ", "                      aNQH#HM&WFB,:+93MXWLi,                    ", "                      !BXWNQ$W0#$ `<@M@gNWX#v                   ", "                       -MHg$Q@W6arBHM0WXB@80i                   ", "                   .7?xS&8&B0+-=@BHBN#&Q$8@x                    ", "                   !MX80#@8&2, rQ$8X#NWHW05;                    ", "                   :H#NWX#&MN8cjX8HW&M@W&Pt'                    ", "                   ;Q0WHB@MXg&B31E#NM61<>7=ri                   ", "                  ,.7QXMXg$8&8X8+|w%eo-  ',.;.                  ", "                     7MX#@WHg&?P.;EoP#>1.                       ", "                      cWHM0M3: E` -ct+xc<'                      ", "                      i*>Lt?:  ,   r??v*j!                      "],
    "colors": ["................................................................", "................................................................", ".................................w..............................", "................................ww..............................", "................................ww..............................", "................................ww..............................", "................................ww..............................", "................................www.............................", ".................................ww.............................", ".................................www............................", ".................................ww.............................", "...............................wwww.............................", "...............................wwww.............................", ".................................www............................", ".................................wwww...........................", ".................................www............................", "..............................wwwww.............................", "..............................wwwww.............................", "...............................wwwwww...........................", ".................................wwwww..........................", ".................................wwwww..........................", "............................wwww.wwwww..........................", "............................wwwwwwwwww..........................", "............................wwwwwwwww...........................", ".............................wwwwww.wwww........................", "..............................wwwwwwwwwww.......................", "..............................wwwwwwwwww........................", "...........................wwwww.wwwwww.........................", "..........................wwwwwwwwwwwww.........................", "...........................wwwwwwwwwww..........................", "...........................wwwwwwww.wwwwww......................", "............................wwwwwwwwwwwwww......................", ".............................wwwwwwwwwwwww......................", ".........................wwwwww..wwwwwwww.......................", ".........................wwwwwwwwwwwwwww........................", ".........................wwwwwwwwwwwwwww........................", ".........................wwwwwwwww..wwwwww......................", "..........................wwwwwwwwwwwwwwwww.....................", "...........................wwwwwwwwwwwwwwww.....................", ".......................wwwwwwww.wwwwwwwwww......................", ".......................wwwwwwwwwwwwwwwwww.......................", ".......................wwwwwwwwwwwwwwwww........................", "........................wwwwwwwwww.wwwwwwww.....................", "........................wwwwwwwwwwwwwwwwwwww....................", ".........................wwwwwwwwwwwwwwwwwww....................", ".....................wwwwwwwwwwwwwwwwwwwwww.....................", ".....................wwwwwwwwww.wwwwwwwwwww.....................", ".....................wwwwwwwwwwwwwwwwwwww.......................", "......................wwwwwwwwwwwwwwwwwwwwww....................", "......................wwwwwwwwwww.wwwwwwwwwww...................", ".......................wwwwwwwwwwwwwwwwwwwwww...................", "...................wwwwwwwwwwwwwwwwwwwwwwwww....................", "...................wwwwwwwwwww.wwwwwwwwwwwww....................", "...................wwwwwwwwwwwwwwwwwwwwwwwww....................", "...................wwwwwwwwwwwwwwwwwwwwwwwwww...................", "..................wwwwwwwwwwwwwwwwwwwww..wwwww..................", ".....................wwwwwwwwwwwwwwwwwwww.......................", "......................wwwwwwww.ww.wwwwwwww......................", "......................wwwwwww..w...wwwwwww......................"]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "archive/ascii-terminal/ascii-data.js", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Button — the primary action primitive.
 * Sharp-cornered by default; the brand "rounds" via a 45° corner chamfer.
 * Signal Red is the primary/confirm fill. Destructive uses a red outline that
 * fills on hover so it reads as caution, distinct from the solid confirm.
 */

const CSS = `
.xgbtn{--_h:var(--size-control-md);--_px:18px;--_fs:var(--text-sm);
  position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  height:var(--_h);padding:0 var(--_px);font-family:var(--font-body);font-size:var(--_fs);
  font-weight:var(--weight-semibold);letter-spacing:0.01em;line-height:1;white-space:nowrap;
  border:var(--border-thin) solid transparent;border-radius:var(--radius-0);cursor:pointer;
  color:var(--content-primary);background:transparent;transition:var(--transition-colors),transform var(--dur-instant) var(--ease-out);
  -webkit-appearance:none;appearance:none;user-select:none;}
.xgbtn:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgbtn:disabled{cursor:not-allowed;opacity:1;color:var(--content-faint);
  background:var(--surface-default);border-color:var(--border-subtle);}
.xgbtn--sm{--_h:var(--size-control-sm);--_px:12px;--_fs:var(--text-xs);}
.xgbtn--lg{--_h:var(--size-control-lg);--_px:24px;--_fs:var(--text-base);}
.xgbtn--full{width:100%;}
.xgbtn--chamfer{clip-path:polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));}

.xgbtn--primary{background:var(--accent);color:var(--accent-content);}
.xgbtn--primary:hover:not(:disabled){background:var(--accent-hover);}
.xgbtn--primary:active:not(:disabled){background:var(--accent-active);}

.xgbtn--secondary{background:transparent;border-color:var(--border-default);color:var(--content-primary);}
.xgbtn--secondary:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-strong);}
.xgbtn--secondary:active:not(:disabled){background:var(--surface-active);}

.xgbtn--ghost{background:transparent;color:var(--content-secondary);}
.xgbtn--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--content-primary);}
.xgbtn--ghost:active:not(:disabled){background:var(--surface-active);}

.xgbtn--danger{background:transparent;border-color:var(--accent-border);color:var(--accent);}
.xgbtn--danger:hover:not(:disabled){background:var(--accent);color:var(--accent-content);border-color:var(--accent);}
.xgbtn--danger:active:not(:disabled){background:var(--accent-active);border-color:var(--accent-active);}

.xgbtn__ico{display:inline-flex;flex:none;width:1em;height:1em;font-size:1.25em;}
.xgbtn__ico svg{width:100%;height:100%;display:block;}
.xgbtn--loading{color:transparent !important;}
.xgbtn__spin{position:absolute;width:1.05em;height:1.05em;border:2px solid currentColor;
  border-top-color:transparent;border-radius:50%;animation:xgbtn-spin .6s linear infinite;
  color:var(--accent-content);}
.xgbtn--secondary .xgbtn__spin,.xgbtn--ghost .xgbtn__spin,.xgbtn--danger .xgbtn__spin{color:var(--content-primary);}
@keyframes xgbtn-spin{to{transform:rotate(360deg);}}
@media (prefers-reduced-motion:reduce){.xgbtn__spin{animation-duration:1.2s;}}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'button');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  chamfer = false,
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgbtn', `xgbtn--${variant}`, size !== 'md' && `xgbtn--${size}`, fullWidth && 'xgbtn--full', chamfer && 'xgbtn--chamfer', loading && 'xgbtn--loading', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || loading
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "xgbtn__spin",
    "aria-hidden": "true"
  }), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "xgbtn__ico",
    "aria-hidden": "true"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "xgbtn__ico",
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE IconButton — a square, icon-only action for toolbars, nav and dense UI.
 * Icon-agnostic: pass a line-icon node (Lucide recommended) as children.
 */

const CSS = `
.xgib{--_s:var(--size-control-md);display:inline-flex;align-items:center;justify-content:center;
  width:var(--_s);height:var(--_s);flex:none;padding:0;cursor:pointer;color:var(--content-secondary);
  background:transparent;border:var(--border-thin) solid transparent;border-radius:var(--radius-0);
  transition:var(--transition-colors);-webkit-appearance:none;appearance:none;}
.xgib:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgib:disabled{cursor:not-allowed;color:var(--content-faint);background:var(--surface-default);border-color:var(--border-subtle);}
.xgib--sm{--_s:var(--size-control-sm);}
.xgib--lg{--_s:var(--size-control-lg);}
.xgib__ico{display:inline-flex;width:var(--icon-md);height:var(--icon-md);}
.xgib--sm .xgib__ico{width:var(--icon-sm);height:var(--icon-sm);}
.xgib--lg .xgib__ico{width:var(--icon-lg);height:var(--icon-lg);}
.xgib__ico svg{width:100%;height:100%;display:block;}

.xgib--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--content-primary);}
.xgib--ghost:active:not(:disabled){background:var(--surface-active);}
.xgib--solid{background:var(--accent);color:var(--accent-content);border-color:var(--accent);}
.xgib--solid:hover:not(:disabled){background:var(--accent-hover);border-color:var(--accent-hover);}
.xgib--solid:active:not(:disabled){background:var(--accent-active);}
.xgib--outline{border-color:var(--border-default);color:var(--content-primary);}
.xgib--outline:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-strong);}
.xgib--outline:active:not(:disabled){background:var(--surface-active);}
.xgib--active{color:var(--accent);}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'icon-button');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgib', `xgib--${variant}`, size !== 'md' && `xgib--${size}`, active && 'xgib--active', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "xgib__ico",
    "aria-hidden": "true"
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Badge — a small, read-only status/label chip. Neutral by default; `signal`
 * is Signal Red. Optional status dot (with a restrained pulse). Sharp corners.
 */

const CSS = `
.xgbadge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-mono);
  font-size:11px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);
  line-height:1;padding:4px 8px;border-radius:var(--radius-1);white-space:nowrap;
  border:var(--border-thin) solid transparent;text-transform:uppercase;}
.xgbadge--md{font-size:var(--text-xs);padding:5px 10px;}
.xgbadge--neutral{background:var(--surface-overlay);color:var(--content-secondary);border-color:var(--border-default);}
.xgbadge--signal{background:var(--accent);color:var(--accent-content);}
.xgbadge--signal-soft{background:var(--accent-surface);color:var(--accent);border-color:var(--accent-border);}
.xgbadge--outline{background:transparent;color:var(--content-primary);border-color:var(--border-strong);}
.xgbadge--positive{background:transparent;color:var(--xg-fn-positive);border-color:color-mix(in srgb, var(--xg-fn-positive) 45%, transparent);}
.xgbadge--warning{background:transparent;color:var(--xg-fn-warning);border-color:color-mix(in srgb, var(--xg-fn-warning) 45%, transparent);}
.xgbadge__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor;flex:none;}
.xgbadge--signal .xgbadge__dot{background:var(--accent-content);}
.xgbadge__dot--pulse{animation:xg-status-pulse 1.8s var(--ease-in-out) infinite;}
@media (prefers-reduced-motion:reduce){.xgbadge__dot--pulse{animation:none;}}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'badge');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  dot = false,
  pulse = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgbadge', `xgbadge--${variant}`, `xgbadge--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: `xgbadge__dot${pulse ? ' xgbadge__dot--pulse' : ''}`,
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Card — a surface container on the black field. Slightly-lighter surface,
 * 1px hairline rule, sharp corners. Depth comes from surface lightness, not
 * shadow. Optional red accent top-rule, one-corner chamfer, and interactive hover.
 */

const CSS = `
.xgcard{position:relative;background:var(--surface-raised);border:var(--border-thin) solid var(--border-subtle);
  border-radius:var(--radius-0);color:var(--content-primary);font-family:var(--font-body);
  display:flex;flex-direction:column;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out);}
.xgcard--pad-sm{padding:var(--space-5);}
.xgcard--pad-md{padding:var(--space-7);}
.xgcard--pad-lg{padding:var(--space-8);}
.xgcard--flat{background:var(--surface-default);}
.xgcard--overlay{background:var(--surface-overlay);border-color:var(--border-default);}
.xgcard--outline{background:transparent;border-color:var(--border-default);}
.xgcard--accent{border-top:var(--border-heavy) solid var(--accent);}
.xgcard--chamfer{border:none;
  clip-path:polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);}
.xgcard--interactive{cursor:pointer;}
.xgcard--interactive:hover{background:var(--surface-overlay);border-color:var(--border-strong);}
.xgcard--interactive:active{transform:translateY(1px);}
.xgcard--interactive:focus-visible{outline:none;box-shadow:var(--ring-focus);}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'card');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  variant = 'raised',
  padding = 'md',
  accent = false,
  chamfer = false,
  interactive = false,
  as,
  className = '',
  ...rest
}) {
  inject();
  const Tag = as || (interactive ? 'button' : 'div');
  const variantClass = {
    raised: '',
    flat: 'xgcard--flat',
    overlay: 'xgcard--overlay',
    outline: 'xgcard--outline'
  }[variant] || '';
  const cls = ['xgcard', variantClass, `xgcard--pad-${padding}`, accent && 'xgcard--accent', chamfer && 'xgcard--chamfer', interactive && 'xgcard--interactive', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Tag — an interactive token for filters, categories and inputs. Unlike the
 * read-only Badge, a Tag can be selectable (toggles Signal Red) or removable
 * (trailing ✕). Sharp corners; sentence-case body type.
 */

const CSS = `
.xgtag{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-body);
  font-size:var(--text-xs);font-weight:var(--weight-medium);line-height:1;padding:5px 9px;
  border-radius:var(--radius-1);white-space:nowrap;background:var(--surface-overlay);
  color:var(--content-secondary);border:var(--border-thin) solid var(--border-default);
  transition:var(--transition-colors);}
.xgtag--button{cursor:pointer;-webkit-appearance:none;appearance:none;}
.xgtag--button:hover{border-color:var(--border-strong);color:var(--content-primary);}
.xgtag--button:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtag--selected{background:var(--accent-surface);border-color:var(--accent-border);color:var(--accent);}
.xgtag__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor;flex:none;}
.xgtag__remove{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;
  margin-right:-2px;border:none;background:transparent;color:currentColor;cursor:pointer;opacity:0.7;
  border-radius:var(--radius-1);transition:var(--transition-colors);}
.xgtag__remove:hover{opacity:1;background:var(--surface-hover);}
.xgtag__remove svg{width:11px;height:11px;display:block;}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'tag');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  selected = false,
  dot = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  inject();
  const clickable = Boolean(onClick);
  const Tagname = clickable ? 'button' : 'span';
  const cls = ['xgtag', clickable && 'xgtag--button', selected && 'xgtag--selected', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tagname, _extends({
    className: cls,
    onClick: onClick,
    "aria-pressed": clickable ? selected : undefined,
    type: clickable ? 'button' : undefined
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "xgtag__dot",
    "aria-hidden": "true"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "xgtag__remove",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * XGVE Dialog — modal surface over a dark scrim. Sharp-cornered overlay panel,
 * hairline rule, optional red accent top-rule. Scrim uses a controlled dark blur
 * (no colour shift). Escape and scrim-click call onClose. Fixed-position overlay
 * (no portal needed).
 */

const CSS = `
.xgdlg__scrim{position:fixed;inset:0;z-index:var(--z-dialog);display:flex;align-items:center;
  justify-content:center;padding:var(--space-8);background:var(--scrim-strong);
  -webkit-backdrop-filter:blur(var(--blur-sm));backdrop-filter:blur(var(--blur-sm));
  animation:xgdlg-fade var(--dur-base) var(--ease-out);}
.xgdlg{position:relative;width:100%;max-width:var(--_w,480px);max-height:calc(100vh - 2*var(--space-8));
  display:flex;flex-direction:column;background:var(--surface-overlay);
  border:var(--border-thin) solid var(--border-default);border-radius:var(--radius-0);
  box-shadow:var(--shadow-overlay);font-family:var(--font-body);color:var(--content-primary);
  animation:xgdlg-rise var(--dur-base) var(--ease-enter);}
.xgdlg--accent{border-top:var(--border-heavy) solid var(--accent);}
.xgdlg__head{display:flex;align-items:flex-start;gap:16px;padding:var(--space-7) var(--space-7) var(--space-4);}
.xgdlg__titles{flex:1;min-width:0;}
.xgdlg__eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:var(--tracking-widest);
  text-transform:uppercase;color:var(--accent);margin:0 0 6px;}
.xgdlg__title{font-family:var(--font-display);font-size:var(--text-xl);font-weight:var(--weight-semibold);
  letter-spacing:var(--tracking-tight);margin:0;}
.xgdlg__desc{margin:8px 0 0;font-size:var(--text-sm);line-height:var(--leading-normal);color:var(--content-secondary);}
.xgdlg__close{flex:none;display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;
  margin:-4px -4px 0 0;background:transparent;border:none;color:var(--content-muted);cursor:pointer;
  border-radius:var(--radius-1);transition:var(--transition-colors);}
.xgdlg__close:hover{background:var(--surface-hover);color:var(--content-primary);}
.xgdlg__close:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgdlg__close svg{width:16px;height:16px;display:block;}
.xgdlg__body{padding:0 var(--space-7) var(--space-4);overflow:auto;font-size:var(--text-sm);
  line-height:var(--leading-normal);color:var(--content-secondary);}
.xgdlg__foot{display:flex;justify-content:flex-end;gap:10px;padding:var(--space-5) var(--space-7) var(--space-7);}
@keyframes xgdlg-fade{from{opacity:0;}to{opacity:1;}}
@keyframes xgdlg-rise{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
@media (prefers-reduced-motion:reduce){.xgdlg__scrim,.xgdlg{animation:none;}}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'dialog');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  description,
  children,
  footer,
  accent = true,
  width = 480,
  closeOnScrim = true,
  className = ''
}) {
  inject();
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  const cls = ['xgdlg', accent && 'xgdlg--accent', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "xgdlg__scrim",
    onMouseDown: e => {
      if (closeOnScrim && e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      '--_w': typeof width === 'number' ? `${width}px` : width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "xgdlg__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "xgdlg__titles"
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "xgdlg__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "xgdlg__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "xgdlg__desc"
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "xgdlg__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  })))), children && /*#__PURE__*/React.createElement("div", {
    className: "xgdlg__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "xgdlg__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE ProgressRing — the broken-ring / gauge motif as a determinate progress
 * indicator. A neutral broken track with a Signal-Red arc filling clockwise, and
 * a mono readout in the centre. Reads as a targeting ring / speedometer, straight
 * from the emblem's language. Intentional brand addition (see readme.md).
 */

const CSS = `
.xgring{position:relative;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-mono);}
.xgring__svg{display:block;}
.xgring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;
  justify-content:center;text-align:center;pointer-events:none;gap:1px;}
.xgring__track{stroke:var(--border-default);}
.xgring__fill{stroke:var(--accent);transition:stroke-dashoffset var(--dur-slow) var(--ease-out);}
.xgring__fill--indeterminate{animation:xgring-rot 1.1s linear infinite;transform-origin:50% 50%;}
.xgring__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-primary);
  font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-wide);}
.xgring__sub{font-size:9px;letter-spacing:var(--tracking-widest);text-transform:uppercase;color:var(--content-muted);}
@keyframes xgring-rot{to{transform:rotate(360deg);}}
@media (prefers-reduced-motion:reduce){.xgring__fill--indeterminate{animation-duration:2.2s;}}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'progress-ring');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function ProgressRing({
  value = 0,
  size = 96,
  thickness = 8,
  gap = 90,
  indeterminate = false,
  showValue = true,
  label,
  className = '',
  ...rest
}) {
  inject();
  const r = (100 - thickness) / 2; // radius in a 0..100 viewBox
  const c = 2 * Math.PI * r; // circumference
  const sweep = 360 - gap; // visible arc degrees
  const arc = c * (sweep / 360); // visible arc length
  const start = 90 + gap / 2; // rotate so the gap centres at bottom
  const pct = Math.max(0, Math.min(100, value));
  const fillLen = arc * (pct / 100);
  const cls = ['xgring', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "xgring__svg",
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    role: "img",
    "aria-label": label || (indeterminate ? 'Working' : `${Math.round(pct)}%`)
  }, /*#__PURE__*/React.createElement("circle", {
    className: "xgring__track",
    cx: "50",
    cy: "50",
    r: r,
    fill: "none",
    strokeWidth: thickness,
    strokeLinecap: "butt",
    strokeDasharray: `${arc} ${c - arc}`,
    transform: `rotate(${start} 50 50)`
  }), /*#__PURE__*/React.createElement("circle", {
    className: `xgring__fill${indeterminate ? ' xgring__fill--indeterminate' : ''}`,
    cx: "50",
    cy: "50",
    r: r,
    fill: "none",
    strokeWidth: thickness,
    strokeLinecap: "butt",
    strokeDasharray: indeterminate ? `${arc * 0.28} ${c}` : `${fillLen} ${c - fillLen}`,
    transform: `rotate(${start} 50 50)`
  })), (showValue || label) && /*#__PURE__*/React.createElement("div", {
    className: "xgring__center"
  }, showValue && !indeterminate && /*#__PURE__*/React.createElement("div", {
    className: "xgring__label"
  }, Math.round(pct), "%"), label && /*#__PURE__*/React.createElement("div", {
    className: "xgring__sub"
  }, label)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Toast — a transient notification surface. Status is carried by a leading
 * glyph/dot (never a coloured left-border — the brand forbids that card style).
 * Slides in and ends still. Presentational: wire your own queue/auto-dismiss.
 */

const CSS = `
.xgtoast{display:flex;align-items:flex-start;gap:12px;width:100%;max-width:400px;
  padding:var(--space-5) var(--space-5) var(--space-5) var(--space-4);
  background:var(--surface-overlay);border:var(--border-thin) solid var(--border-default);
  border-radius:var(--radius-0);box-shadow:var(--shadow-md);font-family:var(--font-body);
  color:var(--content-primary);animation:xgtoast-in var(--dur-base) var(--ease-enter);}
.xgtoast--signal{border-top:var(--border-thick) solid var(--accent);}
.xgtoast__ico{flex:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;margin-top:1px;}
.xgtoast__ico svg{width:18px;height:18px;display:block;}
.xgtoast__dot{width:8px;height:8px;border-radius:var(--radius-pill);margin-top:6px;}
.xgtoast--default .xgtoast__ico,.xgtoast--default .xgtoast__dot{color:var(--content-secondary);background:var(--content-secondary);}
.xgtoast--signal .xgtoast__ico,.xgtoast--signal .xgtoast__dot{color:var(--accent);background:var(--accent);}
.xgtoast--positive .xgtoast__ico,.xgtoast--positive .xgtoast__dot{color:var(--xg-fn-positive);background:var(--xg-fn-positive);}
.xgtoast--warning .xgtoast__ico,.xgtoast--warning .xgtoast__dot{color:var(--xg-fn-warning);background:var(--xg-fn-warning);}
.xgtoast__ico{background:transparent !important;}
.xgtoast__body{flex:1;min-width:0;}
.xgtoast__title{font-size:var(--text-sm);font-weight:var(--weight-semibold);margin:0;line-height:1.3;}
.xgtoast__msg{font-size:var(--text-sm);color:var(--content-secondary);margin:3px 0 0;line-height:var(--leading-normal);}
.xgtoast__actions{display:flex;gap:12px;margin-top:10px;}
.xgtoast__action{font-family:var(--font-mono);font-size:11px;letter-spacing:var(--tracking-wide);
  text-transform:uppercase;color:var(--accent);background:none;border:none;padding:0;cursor:pointer;}
.xgtoast__action:hover{color:var(--accent-hover);}
.xgtoast__action:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtoast__close{flex:none;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;
  margin:-2px -2px 0 0;background:transparent;border:none;color:var(--content-muted);cursor:pointer;
  border-radius:var(--radius-1);transition:var(--transition-colors);}
.xgtoast__close:hover{background:var(--surface-hover);color:var(--content-primary);}
.xgtoast__close:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtoast__close svg{width:14px;height:14px;display:block;}
@keyframes xgtoast-in{from{opacity:0;transform:translateX(16px);}to{opacity:1;transform:translateX(0);}}
@media (prefers-reduced-motion:reduce){.xgtoast{animation:none;}}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'toast');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Toast({
  variant = 'default',
  title,
  message,
  icon,
  actionLabel,
  onAction,
  onClose,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgtoast', `xgtoast--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "status"
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "xgtoast__ico",
    "aria-hidden": "true"
  }, icon) : /*#__PURE__*/React.createElement("span", {
    className: "xgtoast__dot",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "xgtoast__body"
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "xgtoast__title"
  }, title), message && /*#__PURE__*/React.createElement("p", {
    className: "xgtoast__msg"
  }, message), actionLabel && /*#__PURE__*/React.createElement("div", {
    className: "xgtoast__actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "xgtoast__action",
    onClick: onAction
  }, actionLabel))), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "xgtoast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Tooltip — a small technical label shown on hover/focus of its child.
 * Mono text, sharp corners, hairline rule. Placement top/bottom/left/right.
 * Wraps a single interactive child.
 */

const CSS = `
.xgtip{position:relative;display:inline-flex;}
.xgtip__pop{position:absolute;z-index:var(--z-tooltip);pointer-events:none;
  font-family:var(--font-mono);font-size:11px;letter-spacing:var(--tracking-wide);line-height:1.3;
  color:var(--content-primary);background:var(--surface-overlay);
  border:var(--border-thin) solid var(--border-default);border-radius:var(--radius-1);
  padding:5px 8px;white-space:nowrap;box-shadow:var(--shadow-sm);
  opacity:0;transform:scale(0.96);transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);}
.xgtip__pop[data-show="true"]{opacity:1;transform:scale(1);}
.xgtip__pop[data-place="top"]{bottom:calc(100% + 8px);left:50%;transform-origin:bottom center;translate:-50% 0;}
.xgtip__pop[data-place="bottom"]{top:calc(100% + 8px);left:50%;transform-origin:top center;translate:-50% 0;}
.xgtip__pop[data-place="left"]{right:calc(100% + 8px);top:50%;transform-origin:right center;translate:0 -50%;}
.xgtip__pop[data-place="right"]{left:calc(100% + 8px);top:50%;transform-origin:left center;translate:0 -50%;}
.xgtip__kbd{color:var(--accent);margin-left:6px;}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'tooltip');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  shortcut,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  inject();
  const [show, setShow] = React.useState(false);
  const cls = ['xgtip', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocusCapture: () => setShow(true),
    onBlurCapture: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "xgtip__pop",
    role: "tooltip",
    "data-show": show,
    "data-place": placement
  }, label, shortcut && /*#__PURE__*/React.createElement("span", {
    className: "xgtip__kbd"
  }, shortcut)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Checkbox — square control, sharp corners. Checked = Signal-Red fill with
 * a white check. Supports indeterminate. Label sits to the right.
 */

const CSS = `
.xgcheck{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-body);cursor:pointer;
  color:var(--content-primary);font-size:var(--text-sm);line-height:1.35;user-select:none;}
.xgcheck--disabled{cursor:not-allowed;color:var(--content-faint);}
.xgcheck__native{position:absolute;opacity:0;width:0;height:0;pointer-events:none;}
.xgcheck__box{position:relative;flex:none;width:18px;height:18px;margin-top:1px;background:var(--surface-overlay);
  border:var(--border-thin) solid var(--border-strong);border-radius:var(--radius-1);
  transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);
  display:inline-flex;align-items:center;justify-content:center;color:var(--accent-content);}
.xgcheck:hover .xgcheck__box{border-color:var(--content-muted);}
.xgcheck__box svg{width:12px;height:12px;opacity:0;transform:scale(0.6);transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-enter);}
.xgcheck__native:checked + .xgcheck__box,.xgcheck__native:indeterminate + .xgcheck__box{
  background:var(--accent);border-color:var(--accent);}
.xgcheck__native:checked + .xgcheck__box svg,.xgcheck__native:indeterminate + .xgcheck__box svg{opacity:1;transform:scale(1);}
.xgcheck__native:focus-visible + .xgcheck__box{box-shadow:var(--ring-focus);}
.xgcheck--disabled .xgcheck__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xgcheck__desc{display:block;color:var(--content-muted);font-size:var(--text-xs);margin-top:2px;}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'checkbox');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const cls = ['xgcheck', disabled && 'xgcheck--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: uid
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: uid,
    type: "checkbox",
    className: "xgcheck__native",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "xgcheck__box",
    "aria-hidden": "true"
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "12",
    x2: "18",
    y2: "12"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "xgcheck__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Input — single-line text field. Dark inset field, hairline rule, sharp
 * corners; focus draws the Signal-Red ring. Optional leading/trailing adornments
 * (icon nodes) and an error state.
 */

const CSS = `
.xginput{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);width:100%;}
.xginput__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-secondary);}
.xginput__req{color:var(--accent);margin-left:3px;}
.xginput__box{display:flex;align-items:center;gap:8px;height:var(--size-control-md);
  padding:0 12px;background:var(--surface-overlay);border:var(--border-thin) solid var(--border-default);
  border-radius:var(--radius-1);transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);}
.xginput__box:hover{border-color:var(--border-strong);}
.xginput__box:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-surface);}
.xginput--lg .xginput__box{height:var(--size-control-lg);}
.xginput--sm .xginput__box{height:var(--size-control-sm);}
.xginput__field{flex:1;min-width:0;height:100%;border:none;outline:none;background:transparent;
  color:var(--content-primary);font-family:inherit;font-size:var(--text-sm);letter-spacing:0.01em;}
.xginput__field::placeholder{color:var(--content-muted);}
.xginput__adorn{display:inline-flex;flex:none;width:var(--icon-sm);height:var(--icon-sm);color:var(--content-muted);}
.xginput__adorn svg{width:100%;height:100%;display:block;}
.xginput__box:focus-within .xginput__adorn{color:var(--content-secondary);}
.xginput--error .xginput__box{border-color:var(--accent);}
.xginput--error .xginput__box:focus-within{box-shadow:0 0 0 3px var(--accent-surface);}
.xginput__msg{font-family:var(--font-mono);font-size:11px;letter-spacing:var(--tracking-wide);color:var(--content-muted);}
.xginput--error .xginput__msg{color:var(--accent);}
.xginput--disabled{opacity:1;}
.xginput--disabled .xginput__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xginput--disabled .xginput__field{color:var(--content-faint);cursor:not-allowed;}
.xginput--disabled .xginput__label{color:var(--content-faint);}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'input');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  required = false,
  size = 'md',
  leading,
  trailing,
  error,
  hint,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const hasError = Boolean(error);
  const msg = hasError ? error : hint;
  const cls = ['xginput', size !== 'md' && `xginput--${size}`, hasError && 'xginput--error', disabled && 'xginput--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "xginput__label",
    htmlFor: uid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "xginput__req",
    "aria-hidden": "true"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "xginput__box"
  }, leading && /*#__PURE__*/React.createElement("span", {
    className: "xginput__adorn",
    "aria-hidden": "true"
  }, leading), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    className: "xginput__field",
    disabled: disabled,
    "aria-invalid": hasError || undefined
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    className: "xginput__adorn",
    "aria-hidden": "true"
  }, trailing)), msg && /*#__PURE__*/React.createElement("span", {
    className: "xginput__msg"
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Radio — circular single-select control. Selected = Signal-Red ring with a
 * red dot. Use inside a shared `name` group; RadioGroup is a light wrapper.
 */

const CSS = `
.xgradio{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-body);cursor:pointer;
  color:var(--content-primary);font-size:var(--text-sm);line-height:1.35;user-select:none;}
.xgradio--disabled{cursor:not-allowed;color:var(--content-faint);}
.xgradio__native{position:absolute;opacity:0;width:0;height:0;pointer-events:none;}
.xgradio__box{position:relative;flex:none;width:18px;height:18px;margin-top:1px;border-radius:var(--radius-pill);
  background:var(--surface-overlay);border:var(--border-thin) solid var(--border-strong);
  transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);
  display:inline-flex;align-items:center;justify-content:center;}
.xgradio:hover .xgradio__box{border-color:var(--content-muted);}
.xgradio__box::after{content:"";width:8px;height:8px;border-radius:var(--radius-pill);background:var(--accent);
  opacity:0;transform:scale(0.4);transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-enter);}
.xgradio__native:checked + .xgradio__box{border-color:var(--accent);}
.xgradio__native:checked + .xgradio__box::after{opacity:1;transform:scale(1);}
.xgradio__native:focus-visible + .xgradio__box{box-shadow:var(--ring-focus);}
.xgradio--disabled .xgradio__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xgradio__desc{display:block;color:var(--content-muted);font-size:var(--text-xs);margin-top:2px;}
.xgradiogroup{display:flex;flex-direction:column;gap:12px;}
.xgradiogroup--row{flex-direction:row;gap:20px;flex-wrap:wrap;}
.xgradiogroup__legend{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-secondary);margin-bottom:2px;}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'radio');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Radio({
  label,
  description,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const cls = ['xgradio', disabled && 'xgradio--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: uid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    className: "xgradio__native",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "xgradio__box",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", null, label, description && /*#__PURE__*/React.createElement("span", {
    className: "xgradio__desc"
  }, description)));
}
function RadioGroup({
  legend,
  row = false,
  children,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgradiogroup', row && 'xgradiogroup--row', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    className: cls
  }, rest), legend && /*#__PURE__*/React.createElement("div", {
    className: "xgradiogroup__legend"
  }, legend), children);
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Select — native <select> styled to match Input. Sharp field, hairline
 * rule, Signal-Red focus ring, custom chevron.
 */

const CSS = `
.xgselect{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);width:100%;}
.xgselect__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-secondary);}
.xgselect__box{position:relative;display:flex;align-items:center;height:var(--size-control-md);
  background:var(--surface-overlay);border:var(--border-thin) solid var(--border-default);
  border-radius:var(--radius-1);transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);}
.xgselect__box:hover{border-color:var(--border-strong);}
.xgselect__box:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-surface);}
.xgselect--sm .xgselect__box{height:var(--size-control-sm);}
.xgselect--lg .xgselect__box{height:var(--size-control-lg);}
.xgselect__field{flex:1;height:100%;border:none;outline:none;background:transparent;
  color:var(--content-primary);font-family:inherit;font-size:var(--text-sm);letter-spacing:0.01em;
  padding:0 36px 0 12px;-webkit-appearance:none;appearance:none;cursor:pointer;}
.xgselect__field option{background:var(--surface-overlay);color:var(--content-primary);}
.xgselect__chev{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;
  width:var(--icon-sm);height:var(--icon-sm);color:var(--content-muted);}
.xgselect__box:focus-within .xgselect__chev{color:var(--accent);}
.xgselect--disabled .xgselect__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xgselect--disabled .xgselect__field{color:var(--content-faint);cursor:not-allowed;}
.xgselect--placeholder .xgselect__field{color:var(--content-muted);}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'select');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  size = 'md',
  options = [],
  placeholder,
  value,
  defaultValue,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const isControlled = value !== undefined;
  const current = isControlled ? value : defaultValue;
  const showingPlaceholder = placeholder && (current === undefined || current === '');
  const cls = ['xgselect', size !== 'md' && `xgselect--${size}`, disabled && 'xgselect--disabled', showingPlaceholder && 'xgselect--placeholder', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "xgselect__label",
    htmlFor: uid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "xgselect__box"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    className: "xgselect__field",
    disabled: disabled,
    value: value,
    defaultValue: defaultValue
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value,
      disabled: opt.disabled
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "xgselect__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Switch — binary toggle. Off = neutral track; on = Signal-Red track with a
 * white thumb that travels with a decisive settle. Sharp-ish (pill track, square
 * thumb feel kept minimal). For instant on/off state, not multi-select.
 */

const CSS = `
.xgswitch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);cursor:pointer;
  color:var(--content-primary);font-size:var(--text-sm);user-select:none;}
.xgswitch--disabled{cursor:not-allowed;color:var(--content-faint);}
.xgswitch__native{position:absolute;opacity:0;width:0;height:0;pointer-events:none;}
.xgswitch__track{position:relative;flex:none;width:40px;height:22px;background:var(--surface-default);
  border:var(--border-thin) solid var(--border-strong);border-radius:var(--radius-pill);
  transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);}
.xgswitch__thumb{position:absolute;top:2px;left:2px;width:16px;height:16px;background:var(--content-secondary);
  border-radius:var(--radius-pill);transition:transform var(--dur-base) var(--ease-out),background var(--dur-fast) var(--ease-out);}
.xgswitch:hover .xgswitch__track{border-color:var(--content-muted);}
.xgswitch__native:checked + .xgswitch__track{background:var(--accent);border-color:var(--accent);}
.xgswitch__native:checked + .xgswitch__track .xgswitch__thumb{transform:translateX(18px);background:var(--xg-white);}
.xgswitch__native:focus-visible + .xgswitch__track{box-shadow:var(--ring-focus);}
.xgswitch--disabled .xgswitch__track{background:var(--surface-default);border-color:var(--border-subtle);}
.xgswitch--sm .xgswitch__track{width:34px;height:19px;}
.xgswitch--sm .xgswitch__thumb{width:13px;height:13px;}
.xgswitch--sm .xgswitch__native:checked + .xgswitch__track .xgswitch__thumb{transform:translateX(15px);}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'switch');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  size = 'md',
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const cls = ['xgswitch', size === 'sm' && 'xgswitch--sm', disabled && 'xgswitch--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls,
    htmlFor: uid
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    className: "xgswitch__native",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "xgswitch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "xgswitch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * XGVE Tabs — horizontal section switcher. The active tab is marked by a hard
 * Signal-Red underline rule (no pill, no soft highlight). Controlled or
 * uncontrolled. `underline` variant sits on a full hairline baseline; `enclosed`
 * gives each tab a top-cut panel.
 */

const CSS = `
.xgtabs{font-family:var(--font-body);width:100%;}
.xgtabs__list{display:flex;gap:2px;position:relative;}
.xgtabs--underline .xgtabs__list{border-bottom:var(--border-thin) solid var(--border-default);}
.xgtabs__tab{position:relative;display:inline-flex;align-items:center;gap:8px;padding:10px 14px;
  font-size:var(--text-sm);font-weight:var(--weight-medium);letter-spacing:0.01em;line-height:1;
  color:var(--content-muted);background:transparent;border:none;cursor:pointer;
  transition:var(--transition-colors);-webkit-appearance:none;appearance:none;}
.xgtabs__tab:hover:not(:disabled){color:var(--content-primary);}
.xgtabs__tab:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtabs__tab:disabled{color:var(--content-faint);cursor:not-allowed;}
.xgtabs__tab[data-active="true"]{color:var(--content-primary);}
.xgtabs__tab[data-active="true"]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;
  height:2px;background:var(--accent);}
.xgtabs--enclosed .xgtabs__tab{border:var(--border-thin) solid transparent;border-bottom:none;
  background:var(--surface-default);color:var(--content-muted);
  clip-path:polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);}
.xgtabs--enclosed .xgtabs__tab[data-active="true"]{background:var(--surface-raised);color:var(--content-primary);border-top:var(--border-thick) solid var(--accent);}
.xgtabs--enclosed .xgtabs__tab[data-active="true"]::after{display:none;}
.xgtabs__ico{display:inline-flex;width:var(--icon-sm);height:var(--icon-sm);}
.xgtabs__ico svg{width:100%;height:100%;display:block;}
.xgtabs__count{font-family:var(--font-mono);font-size:10px;padding:1px 5px;border-radius:var(--radius-1);
  background:var(--surface-overlay);color:var(--content-secondary);}
.xgtabs__tab[data-active="true"] .xgtabs__count{background:var(--accent-surface);color:var(--accent);}
`;
let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'tabs');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  inject();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const cls = ['xgtabs', `xgtabs--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "xgtabs__list",
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    className: "xgtabs__tab",
    "data-active": active === it.value,
    "aria-selected": active === it.value,
    disabled: it.disabled,
    onClick: () => !it.disabled && select(it.value)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "xgtabs__ico",
    "aria-hidden": "true"
  }, it.icon), it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "xgtabs__count"
  }, it.count)))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// deploy/site/ascii-data.js
try { (() => {
window.XG_ASCII = {
  "emblem": {
    "cols": 82,
    "rows": 35,
    "chars": ["                                                                                  ", "                                ;:;~!|-ir|-|;:                                    ", "                           ,:xw0Q@gNMNB&BNB$g@#w?r'                               ", "                       .rt$8$#@W0Q@35P%e9F#QXg&Q$#X86i`                           ", "                     +o&WH#$gS+;'            ,ir%XB$8&MS:                ,i`      ", "                   |wg$W0#;.                      `~##&M&8x'          ,|>:   LE.  ", "   `.            -8N8@Q7.                            ,c@W0#&t       :>F+  :-:;:   ", "    `i?~;      .5W0B#:                                  +5Ng$w;  '<3#=    ,:;     ", "      '1M2i`  .0gX8+                                      =w1,:;FXS!   xQr        ", "        ;t&#oc!';L`                                         ,>XB@~  ,' ','        ", "           +g0WHjr'                                      ;i9MXgv:  +ga            ", "           ~`=EMN#0F?:                                 ~+gH#$t;    :`:            ", "          ~$Q! !FN#0#N8L|                           :v5X8@8t.                     ", "          oQH6   =3gNgNWHW>i,                    .-3NMXB$t,                       ", "         !Q$g+     ,?&W&#XgNM6?;              .-oNW&g0Mc.;:    ;~-|r|`            ", "         6NQ$'       .<93P55#e2#&?;         ,>H8080Q@t;|#=     E&M@B$M            ", "         $W&S     .rc+t>7tj?L1<wMNQ0%95wwwo2QXBHB&BF=+#&c      ,i-6X#N'           ", "         #XMF       !6aFPPFo59o20BHMc+j1t*@QX#XM$9!.?P-'          58HQ;           ", "         XM@e          !=r|;:-1$#@>;      .tBX#a|`'r:             5$B&.           ", "         SN8@.         '+jt+v*c??:          ;i;:                  HWHa            ", "         +QNM*                                                   !W@B>            ", "          #W0M,               `60j,        .x81:                 w&W&.            ", "          ~XMNa`            :xQ&#$#L.    ;+&8N#H?,              >$MN<             ", "           :@M&o          ,<$W@#&g0#@1 '7#HBX#Ng$QL:           =$QNo              ", "            >Ng$o`      .?Q$#$7, +F&#@MN#&#F. :LBXQH+;        i$#HS`              ", "             ~XB@8!    <N8N#!.     =38HgX6-     ;~2g@Q!:     *X8@S;               ", "              .9M@~  +gXg5|          !%e|          +5HgX:   wXQ$c                 ", "                !: ~5W@j`                            .>WX#+ `##~                  ", "                 rB$or `=                            `. |P#Ni                     ", "               |2W*' :%WXg?|`                     ;t$8XL` ;?&2-                   ", "             ;F#:     ~6W0W@g5t-~;          ';=>P0QNQHE*.    !9E=                 ", "           :+7;         ,:wQ&WHMNB@Q0P2%3QXgHWXgHB&w-.         :*>`               ", "         ,:;                '!xag@W$Q@W@gXW&#&2x:`                .`:             ", "                                  `'+=r:r~;'                                      ", "                                                                                  "],
    "colors": ["..................................................................................", "................................wwwwwwwwwwwwww....................................", "...........................wwwwwwwwwwwwwwwwwwwwwwww...............................", ".......................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........................", ".....................wwwwwwwwwwww............wwwwwwwwwwww................rrr......", "...................wwwwwwwww......................wwwwwwwwww..........rrrr...rrr..", "...ww............wwwwwwww............................wwwwwwww.......rrrr..rrrrr...", "....wwwww......wwwwwww..................................wwwwwww..rrrrr....rrr.....", "......wwwwww..wwwwww......................................wwwwrrrrrr...rrr........", "........wwwwwwwwwww.........................................rrrrrr..rr.rrr........", "...........wwwwwwww......................................rrrrrrrr..rrr............", "...........wwwwwwwwwww.................................rrrrrrrr....rrr............", "..........wwww.wwwwwwwwww...........................rrrrrrrrr.....................", "..........wwww...wwwwwwwwwwww....................rrrrrrrrrr.......................", ".........wwwww.....wwwwwwwwwwwww..............rrrrrrrrrrrrr....wwwwwww............", ".........wwwww.......wwwwwwwwwwwwww.........rrrrrrrrrrrrrr.....wwwwwww............", ".........wwww.....wwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrr......wwwwwwww...........", ".........wwww.......wwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrr..........wwwww...........", ".........wwww..........wwwwwwwwwwwww......rrrrrrrrrrr.............wwwww...........", ".........wwwww.........wwwwwwwwwww..........rrrr..................wwww............", ".........wwwww...................................................wwwww............", "..........wwwww...............wwwww........wwwww.................wwwww............", "..........wwwwww............wwwwwwwww....wwwwwwwww..............wwwww.............", "...........wwwww..........wwwwwwwwwwww.wwwwwwwwwwwww...........wwwww..............", "............wwwwww......wwwwwwww.wwwwwwwwwwww.wwwwwwww........wwwwww..............", ".............wwwwww....wwwwwww.....wwwwwwww.....wwwwwwww.....wwwwww...............", "..............wwwww..wwwwww..........wwww..........wwwwww...wwwww.................", "................ww.wwwwww............................wwwwww.wwww..................", ".................wwwww.ww............................ww.wwwww.....................", "...............wwwww.wwwwwwww.....................wwwwwww.wwwww...................", ".............wwww.....wwwwwwwwwwww..........wwwwwwwwwwwww....wwww.................", "...........wwww.........wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........wwww...............", ".........www................wwwwwwwwwwwwwwwwwwwwww................www.............", "..................................wwwwwwwwww......................................", ".................................................................................."]
  },
  "wordmark": {
    "cols": 120,
    "rows": 14,
    "chars": ["                                                                                                                        ", "  ,=w%Sa3ax:             :cxxj<><i;   `>waea9P3SP2SS5Ewe#a#aeo++>?cL!                  :t?<+L|    !S2PPSa556#5ow%w5%t.  ", "    'xBXMX#$x`         ;>&W0#Xwc:   'SB&BNB$g@#@B0BXQXM0gHg&5; ;20B$ML                |&BXB$*   =##&8@M@#NMHgH#$M$ML'   ", "      ;>$W@M@Q6:     'FW&g$8w=    ;3$WNM$L7tc?Lj1t<7<*v<>v*=    `%$#NW6.             =XW&W@~   |t?LLv7+<tt>v*ct*Lj`     ", "         ra0W@Q@1  ;5$W&WH+,      :HW0Wv                          <08XgE.           ?XBN8P:                             ", "           'cM3: ~HWNg$Wt.        -8HMN.                           vXMHM0:        ;#NQX8a.                              ", "               vW$8N8@<,          =&M&8,        +NM&WXB@W0#&Q0QL    :NM@B@=      ,9XQNM+    #0MNBNgHWX#&#H8@#w'         ", "             :0W@W0B!'+.          ;g$BN.       :%#&BHM0W@WNg$Q&6     .EQ&80+    ;6HgXW!     $#@MHBNM@W@B@B&M-           ", "          .jQXB0gEi;?NM&o`        :Hg@8;         ,|r~+=-i+=wgXg2      'aQN80L  !8H#$6,      B@#@L+:-=;i+i+i             ", "        ;t&#HBX3;  .>#&#$BE:      -g&M@:                   %$WX3        >W$QX%v8@#$%,       @BHg+                       ", "      '?BHg$gF|      ;tH80Q0P!    =0g@8$i,'`.,.`.,.`.;.,.;<NMXgw         rW&gX80Q0#`        8$Q$8a=`';.,'`.,.,.;:       ", "    ,10QN#@9!          .*W$#@Qe=   :XM@W$g@W&Q@8@W0Q&#HW$gH#$Wj:          +#XB&Q$x          ;*&MXQ@W&MHM$BHQ&QHQNM+     ", "  'j#@gHWE.              ;+$#NBX8r   !#0BX8@g0Q@BHB0MNMX8@8@2,             ,#0B&1             .tB&g0WH#$QNW0BNQ&Q&8N:   ", "  ;:,'`.;                   ,'`:;.     ',.`.`';',.`'`'`:;:,'                ;.`.                 ';',.,';:,';:`';:;:,   "],
    "colors": ["........................................................................................................................", "..wwwwwwwwww.............wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwwrrrrrr..................rrrrrrr....wwwwwwwwwwwwwwwwwwww..", "....wwwwwwwwww.........wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwww.wrrrrrr................rrrrrrr...wwwwwwwwwwwwwwwwwwwww...", "......wwwwwwwwww.....wwwwrrrrr....wwwwwwwwwwwwwwwwwwwwwwwwww....wrrrrrrw.............rrrrrrr...wwwwwwwwwwwwwwwwwwww.....", ".........wwwwwwww..wwwwwwwww......wwwwww..........................rrrrrrw...........rrrrrrw.............................", "...........wwwww.wwwwwwwww........wwwwww...........................rrrrrrr........wrrrrrrw..............................", "...............wwwwwwwww..........wwwwww........wwwwwwwwwwwwwwww....rrrrrrr......wrrrrrr....wwwwwwwwwwwwwwwwwww.........", ".............wwwwwwwwwww..........wwwwww.......wwwwwwwwwwwwwwwww.....wrrrrrr....rrrrrrr.....wwwwwwwwwwwwwwwww...........", "..........wwwwwwwwwwwwwwww........wwwwww.........wwwwwwwwwwwwwww......wrrrrrr..rrrrrrr......wwwwwwwwwwwwwww.............", "........wwwwwwwww..wwwwwwwww......wwwwww...................wwwww........rrrrrrrrrrrrw.......wwwww.......................", "......wwwwwwwww......wwwwwwwww....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........rrrrrrrrrrw........wwwwwwwwwwwwwwwwwwwww.......", "....wwwwwwwww..........wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwww..........rrrrrrrr..........wwwwwwwwwwwwwwwwwwwwwww.....", "..wwwwwwwww..............wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwww.............rrrrrr.............wwwwwwwwwwwwwwwwwwwwwww...", "..wwwwwww...................wwwwww.....wwwwwwwwwwwwwwwwwwwww................wwww.................wwwwwwwwwwwwwwwwwwww..."]
  },
  "foxglove": {
    "cols": 74,
    "rows": 67,
    "chars": ["                                                                          ", "                                                          `|,             ", "                                                  ';'r   ;tF<             ", "                                                 t<76g`.r#$?j             ", "                                           ;~!:  -3S8&t*#w*,.;            ", "                                           |X56:,:19#+**j+xae|            ", "                                           ,6&2@6-=&PSa@W0#t:     .`      ", "                                           .cQ@Mvxow-i<j1v!:;             ", "                                     `'ri+=`.`i%a@gto<wEM$gw1v:           ", "                                  -+#268E#2aN+-cP~`~&cv%HWNQ$W?           ", "                              '!=,:+x38ae%E0+58XM-.`gE8evve9~,            ", "                           .rQ08&%oPxx7WEP@F13<~+6+t,EH9;:          `     ", "                         +#$#NBo85%Ea3',to9jL;',F27w5;:;                  ", "                         '>QHw#5HF&tr' '<t+o71!'+Fj3632i                  ", "                   ,       `>N8&L??x*?<a#wPFw56-~EW&g0ac                  ", "                         :r7c7tt+|;>7aXeFwEFeEFw+=3w-'                    ", "                     ;|>#@Q966E<ea|+<9=r17#N2SBHBL.                       ", "                    3BaBPPFo>9L20=;>5:;1t*cQX#5E2'                        ", "              '    `LF%HFF%2?eBF*x>aM@o>96FHLxj;:                         ", "                -i;'`i;'PWt#&*c.?~w6-i5QeWFx@t2M+                         ", "        .`     *6&g$Sa5N*>6>~7g,|e:+x-*?x57!|Hg3~                         ", "               c<WXgwS9#@1+Fo3j><j+i+?evF3$Bw|;          ',               ", "               `7X#&855o:+i;|xw1?<~!:26P5HB&8N<;                          ", "                ;=;7tjee27%<#W22#*j<rS$3NEHBX#Ngoi`              '        ", "              .!jH80FF7Po?:6#$8X6<xv:;256&#NB3SoBX5                       ", "            `~oB@%3S6v<o+:w8PW&M#<1w!',gX8+|!c*#$7`      :                ", "  :      ,*#6@WHMPSo1vLXj5M&8H80P>eL  :H#aMEaw8@gr                        ", "         .eB&gH8$#ES595BHg7.;|!vSg5=,~;~r=PM0Qai,  '`=              ;.    ", "          :3w>ioBN<LgNi`wXw>+r.x|>g;:,'r1*?wP6xr' '  r.                   ", " '        !Q&Q3v>WH#v:,.+*$WXQ08@M$>+:#E>a9QN#0gX2%S$8v.                  ", " ;     `. .;P@F#*w2r|+c-|>7%g0#E'j.-?>c%FP2XB$g080Q6<2B`   `',            ", "    ,'cw7:+i-2ao%6S1+:t:7:; +oP:;'c11P2%3PXgHWP|`.;=EML.`~S#52!           ", "  'xg&a3#@WHM@WwSj>;=-~jv,.,ijxti .LF7*Lo95&#+.,.`:rw&=!>w2cW&o           ", "  ,iH8%c-=w8HWH5FSjtx*1a;~E+*?<<#j`'cQH#5SHM`:;'`|?j@#@?o5SwNe,        '  ", "   ;'*a#x?:;W@8H#5#v6#+;xjoS7SF+*E7`|*:1#XW;:ri;<*72Q&F7EE5&W-            ", "     |##7j,.,7@8*?P5ai;iSaoWPM$o?Lo:,~L~`W<~vc1>x*XMvjj16w0%0|,           ", "     !8NEx?j.,PXe@QL:;|!M6WNM0Q&3o7<.L21i+80#og$6$81vEo?P#QXB%L,:`'       ", "     .,BHa3E+~rW@>ri+i,i$2NB@B@8$9aL;i<e!i-:;'LeejcL*%E#XBXEr~P63#v       ", "     +B0M$W02XW3|-j!|!+`8eB$B@Q@aHB&=;:tt;|-:; ,:ct+<+#%B&?`ixc9M-:       ", "     .+j;'-6ES+t#9ccv>6:NWXx!:`'+i+e06,=!t*tE+c|!'<9SaP#$~,=teES0B`       ", "         ;:!WN35oEFxj5o2Qj=;~-ircrj7o$:;<cv?Excv?;i,>$20=rv65&Q@B,        ", "  ,     ;g$WwgN8Hw+vw3+gNW@3?PaS@#@#&';t-1cg$ME9F6#~;6$262XQN+,:          ", "         `>PL!:-#H#%#- `xE3e3HgX87*+:`xt?7w0QN#082#9.,?3x,:+i           : ", "       'x#FQ#ar|`=Nw+ ;'!'`.;|xo*:  `:x+E3w8HW@gNQ02#:,:?7w9`           ; ", "      .&MXM@8@%6B5LH7`+t?-~;  .?#+ ,'twwcSE&#NgHM$MN#57-7E*+<j'           ", "       =;:,.o#0L5W0jcL7%L~?Lr `~e*`  :Eeae5M&M0Q0358SW&35~,22?            ", "                 ,.L6wP#*LjeP` `<5i   =@5PM$M?|;.,.+<7M$:!~3a6>           ", "                 =0MoFEBa<vaH8,:;%t:   =ag$x,.;.,';*2Q*'-+x+XgN           ", "    '            `tNB6aeQHPo>!  =5?v   ;WHi+ir+++x1egHtr*wWX5r:           ", "                   x0W3EXWNj`   -21<  ,=NaceS6vv+t@g$vwQNgP'              ", "          :         .!**.;       59v:-+v>#80LXMe#XB;: .+*r          :;    ", "          `      '`            = 7e>;+c:     '>aF:;                       ", "                               ` !3x77.                ;:       :         ", "             :vctij:`. i         |P6?.        ,ij1<1x7xj1                 ", "              |*ee6ta5jP:;       -9#+      ,x*t71+:jv@6-:                 ", "                ,1$<7|;c263i,    :w7- `: '!ov|;i;<c5H>,    ';             ", "                 `+aw7c+i+xL7;   ;xvL :`.r<+|!j?7%#Fj                     ", "                   |e#E9<~;|!cc  'tct:,.-~;:x>>#0#x'                      ", "                    .+x@#Lt-:;~* ;7v?  ;=!9EQ5Lr=                         ", "                        rcwS1Fcir jjx',~P3!:                              ", "                  :,        .;#0?;ixj,ta'              ;'                 ", "                               'F9r7>j*.                                  ", "                                'HxL=v'                                   ", "                             .   |##-=      +                             ", "                             !   ,a5xr:                                   ", "                       '         .9v1.`                                   ", "                                  w+t!                                    "],
    "colors": ["..........................................................................", "..........................................................www.............", "..................................................wwww...wwww.............", ".................................................wwwwwwwwwwww.............", "...........................................wwww..wwwwwwwwwwwww............", "...........................................wwwwwwwwwwwwwwwwwww............", "...........................................wwwwwwwwwwwwwwwwww.....ww......", "...........................................wwwwwwwwwwwwwwwwww.............", ".....................................wwwwwwwwwwwwwwwwwwwwwwwwww...........", "..................................wwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..............................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww............", "...........................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........w.....", ".........................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".........................wwwwwwwwwwwww.wwwwwwwwwwwwwwwww..................", "...................w.......wwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".........................wwwwwwwwwwwwwwwwwwwwwwwwwwwww....................", ".....................wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......................", "....................wwwwwwwwwwwwwwwwwwwwwwwwwwwwww........................", "..............w....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "........ww.....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "...............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........ww...............", "...............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........................", "................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..............w........", "..............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......................", "............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww......w................", "..w......wwwwwwwwwwwwwwwwwwwwwwwwwww..wwwwwwwwwwww........................", ".........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..www..............ww....", "..........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.w..ww...................", ".w........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".w.....ww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...www............", "....wwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww........w..", "...wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww............", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww........", "..w.....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........", ".........wwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........w.", ".......wwwwwwwwwwwwww.wwwwwwwwwwww..wwwwwwwwwwwwwwwwwwwwwwwww...........w.", "......wwwwwwwwwwwwwwwwwwwwww..wwww.wwwwwwwwwwwwwwwwwwwwwwwwwwww...........", ".......wwwwwwwwwwwwwwwwwwwwww.wwwww..wwwwwwwwwwwwwwwwwwwwwwwww............", ".................wwwwwwwwwwwww.wwww...wwwwwwwwwwwwwwwwwwwwwwwww...........", ".................wwwwwwwwwwwwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwww...........", "....w............wwwwwwwwwwwww..wwww...wwwwwwwwwwwwwwwwwwwwwwww...........", "...................wwwwwwwwww...wwww..wwwwwwwwwwwwwwwwwwwwww..............", "..........w.........wwwwww.......wwwwwwwwwwwwwwwwwwww.wwww..........ww....", "..........w......ww............w.wwwwwww.....wwwwww.......................", "...............................w.wwwwww................ww.......w.........", ".............wwwwwwwww.w.........wwwww........wwwwwwwwwww.................", "..............wwwwwwwwwwww.......wwww......wwwwwwwwwwwwww.................", "................wwwwwwwwwwwww....wwww.ww.wwwwwwwwwwwwww....ww.............", ".................wwwwwwwwwwwww...wwww.wwwwwwwwwwwwwww.....................", "...................wwwwwwwwwwww..wwwwwwwwwwwwwwwwwww......................", "....................wwwwwwwwwwww.wwww..wwwwwwwwww.........................", "........................wwwwwwwww.wwwwwwwwww..............................", "..................ww........wwwwwwwwwwwww..............ww.................", "...............................wwwwwwwww..................................", "................................wwwwwww...................................", ".............................w...wwwww......w.............................", ".............................w...wwwwww...................................", ".......................w.........wwwwww...................................", "..................................wwww...................................."]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/ascii-data.js", error: String((e && e.message) || e) }); }

// deploy/site/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// deploy/site/xgve-ascii-emblem.js
try { (() => {
/* XGVE Studios — half-ASCII emblem (LEFT half) from the XG_ASCII.emblem grid.
 * The grid defines WHICH cells are lit (the emblem shape) + red cells; the glyph
 * shown in each is drawn from a large varied set and shimmers quickly, so the mark
 * reads as living code. Right half stays empty for the metallic emblem beneath.
 */
(function () {
  var CHARS = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>/\\|!?".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  window.XGVE_initAsciiEmblem = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1,
      grid = null,
      lit = [],
      fs = 10,
      t0 = 0;
    function size() {
      var host = canvas.parentElement || canvas;
      W = canvas.clientWidth || host.clientWidth;
      H = canvas.clientHeight || host.clientHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function build() {
      lit = [];
      if (!grid || !W) return;
      var C = grid.cols,
        R = grid.rows,
        chars = grid.chars,
        cols = grid.colors;
      var cw = W / C,
        ch = H / R,
        half = W * 0.5;
      fs = ch;
      for (var y = 0; y < R; y++) {
        var cr = chars[y] || "",
          kr = cols[y] || "";
        for (var x = 0; x < C; x++) {
          var px = x * cw + cw / 2;
          if (px >= half) break;
          var c = cr[x];
          if (c === " " || c === undefined) continue;
          var di = DENS.indexOf(c);
          lit.push({
            x: px,
            y: y * ch + ch / 2,
            red: kr[x] === "r",
            d: di < 0 ? 0.5 : di / (DENS.length - 1)
          });
        }
      }
      var mx = W * 0.5,
        my = H * 0.5,
        md = Math.hypot(mx, my) || 1;
      for (var k = 0; k < lit.length; k++) lit[k].o = Math.hypot(lit[k].x - mx, lit[k].y - my) / md;
    }
    function render() {
      if (!grid) return;
      ctx.clearRect(0, 0, W, H);
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "600 " + (fs * 0.98).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = performance.now() * 0.014 | 0,
        n = CHARS.length;
      var ts = performance.now() * 0.001;
      var rf = 1;
      if (!reduced && t0) {
        var el = (performance.now() - t0) / 2100;
        rf = el >= 1 ? 1 : el * el * (3 - 2 * el);
      }
      for (var i = 0; i < lit.length; i++) {
        var c = lit[i];
        if (c.o > rf) continue;
        var wv = Math.sin(c.x * 0.02 + ts * 1.3) + Math.sin(c.y * 0.024 - ts);
        var ph = (ts * 0.35 + c.x * 0.012 + c.y * 0.006) % 1; // flow toward the junction
        var pa = ph > 0.72 ? 1 - (ph - 0.72) / 0.28 : ph < 0.08 ? ph / 0.08 : 1;
        var lite = 0.85 + 0.35 * (c.d - 0.5) * Math.sin(ts * 0.5 + 0.6); // pseudo-depth rolling light
        ctx.globalAlpha = Math.min(1, (0.78 + 0.2 * (wv * 0.25 + 0.5)) * (0.35 + 0.65 * pa) * lite);
        ctx.fillStyle = c.red ? "rgba(255,42,56,.95)" : "rgba(233,234,236,.96)";
        ctx.fillText(CHARS[(i * 17 + salt) % n], c.x + ph * 9 + (c.d - 0.5) * 22 * Math.sin(ts * 0.5), c.y + wv * 2.2);
      }
      // rogue red glyphs breaking free of the mark (drift left, fade)
      if (lit.length > 10) {
        for (var r2 = 0; r2 < 2; r2++) {
          var rp = (ts * 0.12 + r2 * 0.5) % 1;
          var src = lit[(r2 * 137 + 29) % lit.length];
          ctx.globalAlpha = rp < 0.1 ? rp / 0.1 * 0.9 : (1 - rp) * 0.9;
          ctx.fillStyle = "rgba(255,42,56,.9)";
          ctx.fillText(CHARS[(r2 * 31 + salt) % n], src.x - rp * 80, src.y - rp * 26);
        }
      }
      ctx.globalAlpha = 1;
    }
    var raf = 0,
      prev = 0;
    function loop(now) {
      if (now - prev > 70) {
        prev = now;
        render();
      }
      raf = requestAnimationFrame(loop);
    }
    var tries = 0;
    function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.emblem)) {
        if (tries++ < 60) setTimeout(start, 80);
        return;
      }
      grid = window.XG_ASCII.emblem;
      size();
      build();
      t0 = performance.now();
      render();
      window.addEventListener("resize", function () {
        size();
        build();
        render();
      });
      if (!reduced) raf = requestAnimationFrame(loop);
    }
    start();
    return function () {
      cancelAnimationFrame(raf);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-ascii-emblem.js", error: String((e && e.message) || e) }); }

// deploy/site/xgve-asciifield.js
try { (() => {
/* XGVE Studios — screen-wide geometric ASCII field (full-bleed, always moving).
 * Known-good 2D engine: glyph sprite ATLAS blitted with drawImage (smooth, no
 * stutter). Two independently rotating kaleidoscopic folds feed several overlapping
 * geometric modes whose weights morph over time. Large varied glyph set; white/gray
 * with scarce red on the peaks. window.XGVE_initAsciiField(canvas).
 * (The 3D wave-sheet variant is parked — see todo 45 — this reliably fills the view.)
 */
(function () {
  var CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#@%&$*+=-<>/\\|!?:;.^~coxsevz".split("");
  window.XGVE_initAsciiField = function (canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var CELL = opts.cell || 30;
    var W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      dpr = 1,
      aspect = 1;
    var atlasW = null,
      atlasR = null,
      tile = 0,
      N = CHARS.length;
    function makeAtlas(col) {
      var a = document.createElement("canvas");
      a.width = tile * N;
      a.height = tile;
      var x = a.getContext("2d");
      x.textBaseline = "middle";
      x.textAlign = "center";
      x.font = "600 " + Math.floor((CELL - 6) * dpr) + "px 'IBM Plex Mono', monospace";
      x.fillStyle = col;
      for (var i = 0; i < N; i++) x.fillText(CHARS[i], i * tile + tile / 2, tile / 2);
      return a;
    }
    function resize() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth;
      H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / CELL);
      rows = Math.ceil(H / CELL);
      aspect = W / H;
      tile = Math.ceil(CELL * dpr);
      atlasW = makeAtlas("#c6ced8");
      atlasR = makeAtlas("#e6202e");
    }
    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(resize);
    setTimeout(resize, 140);
    if (window.ResizeObserver) {
      try {
        new ResizeObserver(resize).observe(canvas.parentElement || document.body);
      } catch (e) {}
    }
    var raf = 0,
      prev = 0,
      tt = 0,
      lastPaint = 0;
    function draw(now) {
      if (document.hidden) {
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      }
      if (window.XGVE_PAUSED) {
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      } // frozen frame stays on canvas
      if (now - lastPaint < 30) {
        raf = requestAnimationFrame(draw);
        return;
      } // ~30fps paint cap
      lastPaint = now;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016;
      prev = now;
      tt += reduced ? 0 : dt * 2.3;
      var T = tt;
      var ra = T * 0.07,
        ca = Math.cos(ra),
        sa = Math.sin(ra);
      var rb = -T * 0.05 + 1.3,
        cb = Math.cos(rb),
        sb = Math.sin(rb);
      var w1 = 0.55 + 0.45 * Math.sin(T * 0.17),
        w2 = 0.55 + 0.45 * Math.sin(T * 0.13 + 2),
        w3 = 0.55 + 0.45 * Math.sin(T * 0.10 + 4),
        w4 = 0.5 + 0.5 * Math.sin(T * 0.08 + 1),
        w5 = 0.5 + 0.5 * Math.sin(T * 0.15 + 3),
        w6 = 0.5 + 0.5 * Math.sin(T * 0.07 + 5),
        w7 = 0.5 + 0.5 * Math.sin(T * 0.12 + 2.5);
      ctx.clearRect(0, 0, W, H);
      var cxp = W / 2,
        cyp = H / 2,
        salt = T * 7 | 0,
        half = CELL / 2;
      for (var j = 0; j < rows; j++) {
        var py = j * CELL + half,
          ny = (py - cyp) / cyp;
        for (var i = 0; i < cols; i++) {
          var px = i * CELL + half,
            nx = (px - cxp) / cxp * aspect;
          var rx = nx * ca - ny * sa,
            ry = nx * sa + ny * ca;
          var u = Math.abs(rx),
            v = Math.abs(ry);
          var r = Math.sqrt(u * u + v * v),
            ang = Math.atan2(v, u + 1e-4);
          var bx = nx * cb - ny * sb,
            by = nx * sb + ny * cb;
          var r2 = Math.sqrt(bx * bx + by * by);
          var s = w1 * Math.sin(r * 8 - T * 1.3) + w2 * Math.sin(ang * 6 + r * 4.5 - T * 0.9) + w3 * Math.sin(u * 20 + v * 20 - T * 1.6) + w4 * Math.sin((u - v) * 26 + T * 1.8) + w5 * Math.sin(r2 * 11 - T * 1.1) + w6 * Math.sin(Math.max(u, v) * 16 - T * 1.2) + w7 * Math.sin((u * 2 + v) * 13 + T * 0.7);
          var val = 0.5 + s * 0.19;
          if (val < 0.30) continue;
          var zN = s * 0.45; // parametric 3D depth
          var scale = 1 + zN * 0.35;
          if (scale < 0.55) scale = 0.55;
          var dx = px + (px - cxp) / cxp * zN * 16; // radial parallax
          var dy = py - zN * CELL * 0.9; // relief lift
          var sz = CELL * scale,
            hs = sz / 2;
          var hash = i * 131 + j * 57 & 255;
          var idx = (hash + salt) % N;
          var depthB = 0.55 + 0.45 * Math.max(0, Math.min(1, zN * 0.45 + 0.5));
          var msk = window.XGVE_RMASK;
          var brk = msk && msk.has((px / 24 | 0) * 4096 + (py / 24 | 0)) ? 0.14 : 1;
          ctx.globalAlpha = (0.12 + Math.min(0.62, (val - 0.30) * 0.8)) * depthB * brk;
          var red = val > 0.88 || (hash & 7) === 0 && val > 0.66;
          ctx.drawImage(red ? atlasR : atlasW, idx * tile, 0, tile, tile, dx - hs, dy - hs, sz, sz);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    if (reduced) {
      cancelAnimationFrame(raf);
      draw(0);
    }
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-asciifield.js", error: String((e && e.message) || e) }); }

// deploy/site/xgve-firestream.js
try { (() => {
/* XGVE Studios — ASCII glyph stream pouring off the emblem's left edge.
 * Row-aligned monospace glyphs stream left like dissolving code: dense & hot
 * (red/orange) near the emblem, cooling through white to steel-blue as they go.
 * window.XGVE_initFireStream(canvas, getOrigin) — getOrigin()->{x,y,h}.
 */
(function () {
  var GLYPHS = "01101#@%&$X=+*:.7?01001".split("");
  var rnd = function () {
    return GLYPHS[Math.random() * GLYPHS.length | 0];
  };
  window.XGVE_initFireStream = function (canvas, getOrigin) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1;
    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);
    var ROW = 13; // row pitch → ascii scanline feel
    var parts = [],
      MAX = 460;
    function spawn(ox, oy, eh) {
      var row = Math.round((oy + (Math.random() - 0.5) * eh) / ROW) * ROW;
      parts.push({
        x: ox + Math.random() * 6,
        y: row,
        vx: -(60 + Math.random() * 150),
        vy: (Math.random() - 0.5) * 7,
        life: 0,
        ttl: 1.6 + Math.random() * 2.4,
        ch: rnd(),
        sz: 10 + Math.random() * 3,
        rechar: 0
      });
      if (parts.length > MAX) parts.shift();
    }
    function color(temp, a) {
      var r, g, b;
      if (temp > 0.62) {
        r = 255;
        g = 55 + (1 - temp) * 210;
        b = 45;
      } // ember red→orange
      else if (temp > 0.34) {
        r = 240;
        g = 242;
        b = 235;
      } // white-hot
      else {
        r = 110;
        g = 170;
        b = 255;
      } // cool steel-blue
      return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a.toFixed(3) + ")";
    }
    var raf = 0,
      prev = 0;
    function frame(t) {
      var dt = prev ? Math.min(0.05, (t - prev) / 1000) : 0.016;
      prev = t;
      ctx.clearRect(0, 0, W, H);
      var o = getOrigin && getOrigin();
      if (o && !reduced) {
        var n = 4 + (Math.random() * 4 | 0);
        for (var i = 0; i < n; i++) spawn(o.x, o.y, o.h || 140);
      }
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (var j = parts.length - 1; j >= 0; j--) {
        var p = parts[j];
        p.life += dt;
        var f = p.life / p.ttl;
        if (f >= 1) {
          parts.splice(j, 1);
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rechar += dt;
        if (p.rechar > 0.12) {
          p.rechar = 0;
          if (Math.random() < 0.5) p.ch = rnd();
        }
        var temp = 1 - f;
        var a = (f < 0.1 ? f / 0.1 : f > 0.62 ? (1 - f) / 0.38 : 1) * 0.92;
        ctx.font = "500 " + p.sz.toFixed(1) + "px 'IBM Plex Mono', monospace";
        ctx.fillStyle = color(temp, a);
        ctx.fillText(p.ch, p.x, p.y);
      }
      raf = requestAnimationFrame(frame);
    }
    if (!reduced) raf = requestAnimationFrame(frame);
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-firestream.js", error: String((e && e.message) || e) }); }

// deploy/site/xgve-foxglove-ghost.js
try { (() => {
/* XGVE Studios — dual alternating ASCII reveal, white, layered over the field.
 * A: the REAL Foxglove trademark art (XG_ASCII.foxglove) FAR RIGHT — builds up
 *    bottom-first, holds, disintegrates, morphing out of the background field.
 * B: big XGVE wordmark (XG_ASCII.wordmark) BOTTOM-LEFT — builds left→right.
 * Alternate (never together). NOTE: this uses the brand's own 2D ASCII art — a
 * faithful trademark. A true parametric 3D foxglove would need a 3D model/depth
 * source of the mark (can't be fabricated from the flat art).
 * window.XGVE_initFoxgloveGhost(canvas).
 */
(function () {
  var NOISE = "01#@%&$X=+*<>/\\|".split("");
  var SHIM = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>?!".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  function smooth(t) {
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return t * t * (3 - 2 * t);
  }
  window.XGVE_initFoxgloveGhost = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1;
    function size() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth;
      H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    var foxCells = null,
      wordCells = null;
    function prepGrid(key, ord) {
      var g = window.XG_ASCII && window.XG_ASCII[key];
      if (!g) return null;
      var C = g.cols,
        R = g.rows,
        chars = g.chars,
        cols = g.colors || [],
        cells = [];
      for (var y = 0; y < R; y++) {
        var row = chars[y] || "",
          kr = cols[y] || "";
        for (var x = 0; x < C; x++) {
          var c = row[x];
          if (c === " " || c === undefined) continue;
          var di = DENS.indexOf(c);
          cells.push({
            x: x,
            y: y,
            ch: c,
            red: kr[x] === "r",
            o: ord(x, y, C, R),
            d: di < 0 ? 0.5 : di / (DENS.length - 1)
          });
        }
      }
      return {
        C: C,
        R: R,
        cells: cells
      };
    }
    function prep() {
      foxCells = prepGrid("foxglove", function (x, y, C, R) {
        return 1 - y / R;
      }); // bottom-first
      wordCells = prepGrid("wordmark", function (x, y, C, R) {
        return x / C;
      }); // left→right
    }
    var T = [{
      Tb: 4.2,
      Th: 2.6,
      Td: 3.0,
      Tg: 1.1
    }, {
      Tb: 3.0,
      Th: 1.8,
      Td: 2.2,
      Tg: 1.1
    }];
    var raf = 0,
      prev = 0,
      tt = 0,
      idx = 0,
      subStart = 0,
      lastPaint = 0,
      pClear = false;
    function phaseRF(e, d) {
      if (reduced) return 1;
      if (e < d.Tb) return smooth(e / d.Tb);
      if (e < d.Tb + d.Th) return 1;
      if (e < d.Tb + d.Th + d.Td) return 1 - smooth((e - d.Tb - d.Th) / d.Td);
      return -1;
    }
    function drawGrid(g, rf, cx, hFrac, wFrac, place, exact) {
      if (!g) return;
      var C = g.C,
        R = g.R,
        ch = H * hFrac / R,
        cw = ch * 0.6;
      if (cw * C > W * wFrac) {
        cw = W * wFrac / C;
        ch = cw / 0.6;
      }
      var blockW = cw * C,
        blockH = ch * R;
      var ox = place === "bl" ? W * 0.04 : cx * W - blockW / 2;
      var oy = place === "bl" ? H * 0.9 - blockH : (H - blockH) / 2;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "500 " + (ch * 0.95).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = performance.now() * 0.012 | 0;
      var ts = performance.now() * 0.001;
      var mask = new Set();
      for (var i = 0; i < g.cells.length; i++) {
        var cell = g.cells[i],
          reveal = rf - cell.o;
        if (reveal <= 0) continue;
        var glyph;
        if (reveal < 0.06) glyph = NOISE[Math.random() * NOISE.length | 0];else if (exact) glyph = Math.random() < 0.015 ? NOISE[Math.random() * NOISE.length | 0] : cell.ch;else glyph = SHIM[(cell.x * 17 + cell.y * 29 + salt) % SHIM.length];
        var px = ox + cell.x * cw + cw / 2,
          py = oy + cell.y * ch + ch / 2;
        var sway = Math.sin(ts * 0.55);
        px += (cell.d - 0.5) * 30 * sway; // pseudo-depth parallax (both subjects)
        var lite = 0.85 + 0.35 * (cell.d - 0.5) * Math.sin(ts * 0.55 + 0.6);
        mask.add((px / 24 | 0) * 4096 + (py / 24 | 0));
        var wv = Math.sin(px * 0.011 + ts * 1.2) + Math.sin(py * 0.013 - ts * 0.9);
        ctx.globalAlpha = Math.min(1, smooth(reveal / 0.22) * (0.52 + 0.24 * (wv * 0.25 + 0.5)) * lite);
        var isRed = cell.red || exact && (cell.x * 7 + cell.y * 13) % 11 === 0;
        ctx.fillStyle = isRed ? "rgba(230,32,46,0.95)" : "rgba(198,204,214,0.95)";
        ctx.fillText(glyph, px, py + wv * 2.4);
      }
      window.XGVE_RMASK = mask;
    }
    function draw(now) {
      if (window.XGVE_PAUSED) {
        if (!pClear) {
          ctx.clearRect(0, 0, W, H);
          window.XGVE_RMASK = null;
          pClear = true;
        }
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      }
      pClear = false;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016;
      prev = now;
      tt += reduced ? 0 : dt;
      if (now - lastPaint < 33) {
        raf = requestAnimationFrame(draw);
        return;
      } // ~30fps paint, timeline stays true
      lastPaint = now;
      ctx.clearRect(0, 0, W, H);
      var cur = reduced ? 0 : idx,
        d = T[cur],
        e = tt - subStart;
      if (!reduced && e >= d.Tb + d.Th + d.Td + d.Tg) {
        idx = (idx + 1) % 2;
        subStart = tt;
        window.XGVE_RMASK = null;
        raf = requestAnimationFrame(draw);
        return;
      }
      var rf = phaseRF(e, d);
      if (rf >= 0) {
        if (cur === 0) drawGrid(foxCells, rf, 0.85, 0.72, 0.28, "right", true);else drawGrid(wordCells, rf, 0.30, 0.19, 0.40, "bl", false);
      } else {
        window.XGVE_RMASK = null;
        if (!reduced && (now / 500 | 0) % 2 === 0) {
          // blink where the next build starts
          var cx2 = idx === 0 ? W * 0.055 : W * 0.85,
            cy2 = idx === 0 ? H * 0.88 : H * 0.76;
          ctx.font = "500 14px 'IBM Plex Mono', monospace";
          ctx.globalAlpha = 0.7;
          ctx.fillStyle = "rgba(198,204,214,0.9)";
          ctx.fillText("\u2589", cx2, cy2);
          ctx.globalAlpha = 1;
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    var tries = 0;
    (function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.foxglove)) {
        if (tries++ < 60) {
          setTimeout(start, 80);
          return;
        }
      }
      prep();
      subStart = 0;
      raf = requestAnimationFrame(draw);
    })();
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-foxglove-ghost.js", error: String((e && e.message) || e) }); }

// deploy/site/xgve-foxglove.jsx
try { (() => {
/* XGVE Studios — Foxglove Multiversal landing (recreation of direction 1c).
 * Flagship game hero: flora emblem reconstructed from glyph text, spec column,
 * continuity labels. Opened from the Work overlay. Plain-React recreation
 * (no DS bundle here) — ProgressRing + buttons are simple cosmetic versions.
 */
(function () {
  const React = window.React;
  const {
    useEffect,
    useRef
  } = React;
  const NOISE = ['#', '@', '8', '0', '%', '&', '?', '7', '1', '$', 'X', 'B', 'H', ':', '.', '*', '=', '+', 'o', 'w'];

  /* Foxglove flora, reconstructed bottom-up from glyph noise (window.XG_ASCII.foxglove). */
  function FoxgloveAscii({
    font,
    dur
  }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current,
        DATA = window.XG_ASCII;
      if (!el || !DATA || !DATA.foxglove) {
        if (el) el.textContent = "";
        return;
      }
      const grid = DATA.foxglove,
        C = grid.cols,
        R = grid.rows,
        chars = grid.chars,
        cols = grid.colors;
      const fs = font,
        lh = fs * 1.15,
        cw = fs * 0.6;
      el.style.position = "relative";
      el.style.width = C * cw + "px";
      el.style.height = R * lh + "px";
      el.innerHTML = "";
      const mk = (color, glow) => {
        const p = document.createElement("pre");
        p.style.cssText = 'margin:0;position:absolute;inset:0;font-family:"IBM Plex Mono",monospace;font-size:' + fs + 'px;line-height:' + lh + 'px;white-space:pre;letter-spacing:0;color:' + color + ';text-shadow:' + glow + ';pointer-events:none;';
        return p;
      };
      const white = mk("#e9eaec", "0 0 " + fs * 0.5 + "px rgba(150,160,175,.22)");
      const red = mk("#ff2233", "0 0 " + fs * 0.9 + "px rgba(255,34,51,.5)");
      el.appendChild(white);
      el.appendChild(red);
      const th = new Float32Array(C * R);
      for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) {
        let t = 1 - y / R;
        t = t * 0.8 + Math.random() * 0.2;
        th[y * C + x] = Math.min(0.999, t);
      }
      let start = 0,
        done = false,
        raf = 0,
        lastFlick = 0;
      const render = (p, flicker) => {
        let w = "",
          r = "";
        for (let y = 0; y < R; y++) {
          const cs = chars[y] || "",
            ks = cols[y] || "",
            base = y * C;
          let wl = "",
            rl = "";
          for (let x = 0; x < C; x++) {
            const ch = cs[x];
            if (ch === " " || ch === undefined) {
              wl += " ";
              rl += " ";
              continue;
            }
            const t = th[base + x],
              isR = ks[x] === "r";
            if (p >= t) {
              let o = ch;
              if (flicker && Math.random() < 0.012) o = NOISE[Math.random() * NOISE.length | 0];
              if (isR) {
                rl += o;
                wl += " ";
              } else {
                wl += o;
                rl += " ";
              }
            } else if (p >= t - 0.11) {
              const g = NOISE[Math.random() * NOISE.length | 0];
              if (isR) {
                rl += g;
                wl += " ";
              } else {
                wl += g;
                rl += " ";
              }
            } else {
              wl += " ";
              rl += " ";
            }
          }
          w += wl + "\n";
          r += rl + "\n";
        }
        white.textContent = w;
        red.textContent = r;
      };
      const loop = now => {
        if (!start) start = now;
        if (!done) {
          let p = (now - start) / dur;
          if (p >= 1) {
            p = 1;
            done = true;
            render(1);
          } else render(p);
        } else if (now - lastFlick > 150) {
          lastFlick = now;
          render(1, true);
        }
        raf = requestAnimationFrame(loop);
      };
      render(0);
      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }, [font, dur]);
    return React.createElement("div", {
      ref: ref,
      "aria-hidden": true
    });
  }
  function Ring({
    value,
    size
  }) {
    const r = (size - 8) / 2,
      c = 2 * Math.PI * r,
      off = c * (1 - value / 100);
    return React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        flex: "none"
      }
    }, React.createElement("svg", {
      width: size,
      height: size,
      style: {
        transform: "rotate(-90deg)"
      }
    }, React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#26262a",
      strokeWidth: 3
    }), React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#e6021b",
      strokeWidth: 3,
      strokeDasharray: c,
      strokeDashoffset: off
    })), React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: 15,
        color: "#fff",
        fontWeight: 600
      }
    }, value));
  }
  const mono = extra => Object.assign({
    fontFamily: "IBM Plex Mono, monospace"
  }, extra || {});
  function FoxgloveLanding({
    onClose
  }) {
    const btn = primary => ({
      fontFamily: "IBM Plex Mono, monospace",
      fontSize: 12,
      letterSpacing: ".1em",
      padding: "13px 22px",
      cursor: "pointer",
      border: "1px solid " + (primary ? "#e6021b" : "#313136"),
      background: primary ? "#e6021b" : "transparent",
      color: "#fff",
      textTransform: "uppercase"
    });
    const tag = mono({
      fontSize: 10,
      letterSpacing: ".1em",
      color: "#a8a9b0",
      border: "1px solid #313136",
      padding: "4px 9px"
    });
    return React.createElement("section", {
      className: "fox",
      "data-screen-label": "Foxglove Multiversal",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 70,
        background: "radial-gradient(150% 130% at 76% 50%, #0e0e11 0%, #000 60%)",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(30px,6vw,80px)",
        overflow: "hidden",
        animation: "work-in .5s ease-out both"
      }
    }, React.createElement("button", {
      onClick: onClose,
      style: mono({
        position: "absolute",
        top: 34,
        right: 40,
        zIndex: 5,
        background: "none",
        border: 0,
        color: "#83848c",
        fontSize: 11,
        letterSpacing: ".16em",
        textTransform: "uppercase",
        cursor: "pointer"
      })
    }, "\u2190 Back"),
    // ---- left: spec column ----
    React.createElement("div", {
      style: {
        width: 520,
        flex: "none",
        zIndex: 2
      }
    }, React.createElement("div", {
      style: mono({
        fontSize: 11,
        letterSpacing: ".14em",
        color: "#83848c",
        textTransform: "uppercase"
      })
    }, "Flagship // Flora_Series \u00b7 \u03b1-XGVE-7A"), React.createElement("h2", {
      style: {
        fontFamily: "Space Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(46px,6vw,72px)",
        lineHeight: .92,
        color: "#fff",
        margin: "16px 0 0",
        letterSpacing: "-.02em"
      }
    }, "Foxglove", React.createElement("br"), "Multiversal", React.createElement("span", {
      style: {
        color: "#e6021b"
      }
    }, ".")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        margin: "24px 0"
      }
    }, ["Simulation", "Roguelite", "Liminal"].map(t => React.createElement("span", {
      key: t,
      style: tag
    }, t.toUpperCase()))), React.createElement("p", {
      style: {
        fontFamily: "Inter, sans-serif",
        fontSize: 15,
        lineHeight: 1.66,
        color: "#a8a9b0",
        maxWidth: 430,
        margin: 0
      }
    }, "An alternate-history enterprise OS that reconstructs reality through text. Clock in, roll back, and watch the whole system reboot itself from institutional memory."), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        margin: "28px 0 30px"
      }
    }, React.createElement(Ring, {
      value: 98,
      size: 74
    }), React.createElement("div", {
      style: mono({
        fontSize: 10,
        lineHeight: 1.9,
        color: "#83848c",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Status: ", React.createElement("b", {
      style: {
        color: "#ff2233"
      }
    }, "TBC"), React.createElement("br"), "Engine: Continuity")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, React.createElement("a", {
      href: "mailto:hello@xgve.io?subject=Foxglove%20Multiversal%20updates",
      style: Object.assign({
        textDecoration: "none",
        display: "inline-block"
      }, btn(true))
    }, "Get updates"))),
    // ---- right: flora reconstruction ----
    React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minWidth: 0
      }
    }, React.createElement("div", {
      style: mono({
        position: "absolute",
        top: "8%",
        right: "2%",
        textAlign: "right",
        fontSize: 10,
        lineHeight: 1.7,
        color: "#83848c",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Continuity Label", React.createElement("br"), "\u03b1-XGVE-7A", React.createElement("br"), "Subject: ", React.createElement("b", {
      style: {
        color: "#e9eaec"
      }
    }, "Flora"), React.createElement("br"), "Stability: ", React.createElement("b", {
      style: {
        color: "#e9eaec"
      }
    }, "0.9837")), React.createElement("div", {
      style: mono({
        position: "absolute",
        left: "2%",
        top: "22%",
        fontSize: 10,
        lineHeight: 1.8,
        color: "#5c5d64",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Node_0043.A", React.createElement("br"), "> reconstruct", React.createElement("br"), "> validate", React.createElement("br"), "> commit"), React.createElement(FoxgloveAscii, {
      font: 8,
      dur: 4200
    })));
  }
  window.XGVE_FoxgloveLanding = FoxgloveLanding;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-foxglove.jsx", error: String((e && e.message) || e) }); }

// deploy/site/xgve-lockup.jsx
try { (() => {
/* XGVE Studios — redline emblem component (the real mark, layered for motion).
 * Phase "intro" → revving (hot rev + flutter + shudder); "idle" → settled + idle loop.
 * idle: "pulse" (signal pulse, locked default) | "stream" (pixel stream).
 */
(function () {
  const React = window.React;
  function RedlineEmblem({
    phase,
    idle
  }) {
    const cls = "rl-emblem " + (phase === "intro" ? "is-revving" : "is-settled");
    return React.createElement("div", {
      className: cls,
      "data-idle": idle || "pulse",
      role: "img",
      "aria-label": "XGVE"
    }, React.createElement("div", {
      className: "rl-layer rl-structure"
    }), React.createElement("div", {
      className: "rl-sheen",
      "aria-hidden": true
    }), React.createElement("div", {
      className: "rl-rev"
    }, React.createElement("div", {
      className: "rl-layer rl-needle"
    }, React.createElement("div", {
      className: "rl-heat"
    }))), React.createElement("span", {
      className: "rl-px p1"
    }), React.createElement("span", {
      className: "rl-px p2"
    }), React.createElement("span", {
      className: "rl-px p3"
    }), React.createElement("span", {
      className: "rl-px p4"
    }));
  }
  window.XGVE_RedlineEmblem = RedlineEmblem;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-lockup.jsx", error: String((e && e.message) || e) }); }

// deploy/site/xgve-masks.js
try { (() => {
/* XGVE Studios — rotating ASCII mask PILLAR (left of the hero).
 * A single tall canvas: 4 rows stacked; each row is a turntable of 4 face-relief
 * masks orbiting a full 360° (front → profile → back → profile). White dot cloud
 * with scarce red, on a faint turntable podium. window.XGVE_initMasks(container).
 */
(function () {
  function g(u, v, cu, cv, su, sv) {
    var du = (u - cu) / su,
      dv = (v - cv) / sv;
    return Math.exp(-(du * du + dv * dv));
  }
  function band(v, a, b) {
    if (v < a || v > b) return 0;
    var t = (v - a) / (b - a);
    return Math.sin(t * Math.PI);
  }
  function buildMaskPoints() {
    var pts = [],
      step = 0.08;
    for (var v = -1.05; v <= 1.05; v += step) {
      for (var u = -0.95; u <= 0.95; u += step) {
        var ex = u / 0.80,
          ey = (v - 0.05) / 1.05;
        if (ex * ex + ey * ey > 1) continue;
        var z = Math.cos(u * 1.3) * Math.cos((v - 0.05) * 0.95);
        if (z < 0) z = 0;
        z -= 0.60 * g(u, v, 0.33, 0.30, 0.15, 0.13);
        z -= 0.60 * g(u, v, -0.33, 0.30, 0.15, 0.13);
        z += 0.16 * g(u, v, 0.33, 0.48, 0.20, 0.08);
        z += 0.16 * g(u, v, -0.33, 0.48, 0.20, 0.08);
        z += 0.42 * Math.exp(-Math.pow(u / 0.09, 2)) * band(v, -0.22, 0.36);
        z -= 0.18 * g(u, v, 0.085, -0.26, 0.06, 0.06);
        z -= 0.18 * g(u, v, -0.085, -0.26, 0.06, 0.06);
        z -= 0.28 * g(u, v, 0, -0.52, 0.27, 0.09);
        if (z < 0) z = 0;
        pts.push({
          x: u,
          y: v - 0.05,
          z: z * 0.8,
          red: Math.random() < 0.04
        });
      }
    }
    return pts;
  }
  window.XGVE_initMasks = function (container) {
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ROWS = 4,
      PER = 4;
    var pts = buildMaskPoints();
    var W = 240,
      H = 600,
      dpr = Math.min(2, window.devicePixelRatio || 1);
    var cv = document.createElement("canvas");
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + "px";
    cv.style.height = H + "px";
    cv.style.display = "block";
    container.appendChild(cv);
    var ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);
    var maskScale = 42,
      R = 52,
      pf = 250,
      cx = W / 2,
      rowH = H / ROWS;
    var maxW = R + maskScale * 1.1;
    function drawMask(theta, rowCy) {
      var ct = Math.cos(theta),
        st = Math.sin(theta);
      var slotX = st * R,
        slotZ = ct * R;
      var depth = (slotZ + maxW) / (2 * maxW); // 0 back .. 1 front
      var aBase = 0.12 + Math.pow(Math.max(0, depth), 1.3) * 0.95;
      for (var p = 0; p < pts.length; p++) {
        var pt = pts[p];
        var Xr = pt.x * ct + pt.z * st;
        var Zr = -pt.x * st + pt.z * ct;
        var wx = Xr * maskScale + slotX;
        var wz = Zr * maskScale + slotZ;
        var persp = pf / (pf - wz);
        var sx = cx + wx * persp;
        var sy = rowCy - pt.y * maskScale * persp;
        var a = aBase * (0.75 + 0.25 * persp);
        if (a > 1) a = 1;
        var sz = 0.7 + persp * 0.7;
        if (pt.red) ctx.fillStyle = "rgba(255,42,56," + a.toFixed(2) + ")";else ctx.fillStyle = "rgba(233,234,236," + (a * 0.92).toFixed(2) + ")";
        ctx.fillRect(sx, sy, sz, sz);
      }
    }
    function drawPodium(rowCy, ph) {
      var py0 = rowCy + maskScale * 1.15,
        rx = R + maskScale * 0.55,
        ry = 13;
      for (var k = 0; k < 54; k++) {
        var th = k / 54 * Math.PI * 2 + ph;
        var px = cx + Math.cos(th) * rx,
          py = py0 + Math.sin(th) * ry;
        ctx.fillStyle = k % 16 === 0 ? "rgba(255,42,56,.5)" : "rgba(120,124,132,.34)";
        ctx.fillRect(px, py, 1, 1);
      }
    }
    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      var base = reduced ? 0.4 : now * 0.00046;
      for (var r = 0; r < ROWS; r++) {
        var rowCy = (r + 0.5) * rowH;
        drawPodium(rowCy, base * 0.8 + r);
        var Ar = base + r * 0.7;
        // order the 4 masks back-to-front
        var order = [];
        for (var k = 0; k < PER; k++) {
          var th = Ar + k * (Math.PI / 2);
          order.push({
            th: th,
            z: Math.cos(th)
          });
        }
        order.sort(function (a, b) {
          return a.z - b.z;
        });
        for (var i = 0; i < order.length; i++) drawMask(order[i].th, rowCy);
      }
      raf = requestAnimationFrame(frame);
    }
    var raf = requestAnimationFrame(frame);
    if (reduced) {
      cancelAnimationFrame(raf);
      frame(0);
    }
    return function () {
      cancelAnimationFrame(raf);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-masks.js", error: String((e && e.message) || e) }); }

// deploy/site/xgve-site.jsx
try { (() => {
/* XGVE Studios — hero: screen-wide geometric ASCII field (background) + the
 * emblem rendered half-ASCII (left) / metallic (right), with the tagline below.
 * Minimal corners; a glyph trail follows the cursor.
 */
(function () {
  const React = window.React;
  const h = React.createElement;
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakToggle
  } = window;
  const RedlineEmblem = window.XGVE_RedlineEmblem;
  const WorkOverlay = window.XGVE_WorkOverlay;
  const WORDMARK = "../assets/wordmark/xgve-wordmark-redx.png";
  const IDLE_CLASS = {
    "Signal pulse": "pulse",
    "Pixel stream": "stream"
  };
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "idle": "Signal pulse",
    "field": true,
    "vignette": true,
    "grain": false
  } /*EDITMODE-END*/;
  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const idleKey = IDLE_CLASS[t.idle] || "pulse";
    const [wins, setWins] = useState({
      fox: false,
      readme: false,
      contact: false
    });
    const [paused, setPaused] = useState(false);
    const fieldRef = useRef(null);
    const embRef = useRef(null);
    const ghostRef = useRef(null);

    // ESC closes windows
    useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") setWins({
          fox: false,
          readme: false,
          contact: false
        });
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    // cursor glyph trail
    useEffect(() => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const GLYPHS = "#@8%&$X017=+*:.";
      let last = 0;
      const onMove = e => {
        const now = performance.now();
        if (now - last < 26) return;
        last = now;
        const trail = document.querySelector(".ascii-trail");
        if (!trail) return;
        for (let k = 0; k < 3; k++) {
          // ascii brush: 3 glyphs per stroke
          const s = document.createElement("span");
          s.className = "tglyph";
          s.textContent = GLYPHS[Math.random() * GLYPHS.length | 0];
          s.style.left = e.clientX + (Math.random() - 0.5) * 28 + "px";
          s.style.top = e.clientY + (Math.random() - 0.5) * 28 + "px";
          s.style.color = Math.random() < 0.16 ? "#ff2a38" : "#e9eaec";
          s.style.fontSize = (16 + Math.random() * 10).toFixed(1) + "px";
          trail.appendChild(s);
          const dx = (Math.random() - 0.5) * 18;
          s.animate([{
            opacity: 0.9,
            transform: "translate(-50%,-50%) scale(1)"
          }, {
            opacity: 0,
            transform: "translate(-50%,-50%) translate(" + dx.toFixed(1) + "px,-30px) scale(0.55)"
          }], {
            duration: 1400 + Math.random() * 600,
            easing: "ease-out"
          }).onfinish = () => s.remove();
        }
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // mount the ascii field (bg) + the ascii half of the emblem
    useEffect(() => {
      let alive = true;
      const dz = [];
      let tries = 0;
      const boot = () => {
        if (!alive) return;
        if (window.XGVE_initAsciiField && fieldRef.current && !fieldRef.current.dataset.on) {
          fieldRef.current.dataset.on = "1";
          dz.push(window.XGVE_initAsciiField(fieldRef.current));
        }
        if (window.XGVE_initAsciiEmblem && embRef.current && !embRef.current.dataset.on) {
          embRef.current.dataset.on = "1";
          dz.push(window.XGVE_initAsciiEmblem(embRef.current));
        }
        if (window.XGVE_initFoxgloveGhost && ghostRef.current && !ghostRef.current.dataset.on) {
          ghostRef.current.dataset.on = "1";
          dz.push(window.XGVE_initFoxgloveGhost(ghostRef.current));
        }
        if ((!window.XGVE_initAsciiField || !window.XGVE_initAsciiEmblem || !window.XGVE_initFoxgloveGhost) && tries < 50) {
          tries++;
          setTimeout(boot, 60);
        }
      };
      boot();
      return () => {
        alive = false;
        dz.forEach(d => d && d());
      };
    }, []);
    return h("div", {
      className: "stage phase-idle",
      "data-grain": t.grain ? "on" : "off",
      "data-vignette": t.vignette ? "on" : "off"
    }, t.field && h("canvas", {
      className: "ascii-field",
      ref: fieldRef,
      "aria-hidden": true
    }), t.field && h("canvas", {
      className: "foxglove-ghost",
      ref: ghostRef,
      "aria-hidden": true
    }), h("div", {
      className: "grain",
      "aria-hidden": true
    }), h("div", {
      className: "ascii-trail",
      "aria-hidden": true
    }),
    // ---- emblem (half ascii / half metallic) + tagline ----
    h("div", {
      className: "stage-inner"
    }, h("div", {
      className: "rl-lockup"
    }, h("div", {
      className: "emblem-split"
    }, h("div", {
      className: "es-metal"
    }, h(RedlineEmblem, {
      phase: "idle",
      idle: idleKey
    })), h("canvas", {
      className: "es-ascii",
      ref: embRef,
      "aria-hidden": true
    })), h("p", {
      className: "rl-tagline"
    }, "Good taste, engineered", h("span", {
      className: "dot"
    }, ".")))),
    // ---- minimal corners ----
    h("div", {
      className: "hud"
    }, h("div", {
      className: "corner tl"
    }, h("img", {
      className: "tl-wordmark",
      src: WORDMARK,
      alt: "XGVE",
      draggable: false,
      style: {
        height: "25px",
        width: "auto",
        display: "block"
      }
    })), h("div", {
      className: "corner tr"
    }, h("button", {
      className: "navlink",
      onClick: () => {
        const p = !paused;
        setPaused(p);
        window.XGVE_PAUSED = p;
      }
    }, paused ? "Resume" : "Pause")), h("div", {
      className: "corner bl"
    }, "\u00a9 2026 XGVE STUDIOS\u2122"), h("div", {
      className: "corner br"
    }, h("button", {
      className: "navlink",
      onClick: () => setWins(w => ({
        ...w,
        readme: !w.readme
      }))
    }, "readme"), h("button", {
      className: "navlink",
      onClick: () => setWins(w => ({
        ...w,
        contact: !w.contact
      }))
    }, "contact"), h("button", {
      className: "navlink",
      style: {
        color: "#ff2a38",
        borderColor: "rgba(216,32,46,0.6)"
      },
      onClick: () => setWins(w => ({
        ...w,
        fox: !w.fox
      }))
    }, "Foxglove Multiversal"))), wins.contact && window.XGVE_ContactWindow && h(window.XGVE_ContactWindow, {
      onClose: () => setWins(w => ({
        ...w,
        contact: false
      }))
    }), wins.fox && window.XGVE_FoxWindow && h(window.XGVE_FoxWindow, {
      onClose: () => setWins(w => ({
        ...w,
        fox: false
      }))
    }), wins.readme && window.XGVE_ReadmeWindow && h(window.XGVE_ReadmeWindow, {
      onClose: () => setWins(w => ({
        ...w,
        readme: false
      }))
    }), h(TweaksPanel, null, h(TweakSection, {
      label: "Emblem"
    }), h(TweakRadio, {
      label: "Idle",
      value: t.idle,
      options: Object.keys(IDLE_CLASS),
      onChange: v => setTweak("idle", v)
    }), h(TweakSection, {
      label: "Atmosphere"
    }), h(TweakToggle, {
      label: "ASCII field",
      value: t.field,
      onChange: v => setTweak("field", v)
    }), h(TweakToggle, {
      label: "Vignette",
      value: t.vignette,
      onChange: v => setTweak("vignette", v)
    }), h(TweakToggle, {
      label: "Film grain",
      value: t.grain,
      onChange: v => setTweak("grain", v)
    })));
  }
  window.XGVE_App = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-site.jsx", error: String((e && e.message) || e) }); }

// deploy/site/xgve-windows.jsx
try { (() => {
/* XGVE Studios — minimalist retro draggable windows (1b style).
 * RetroWindow: thin-border mono title-bar window, draggable by its title bar,
 * square glyph closes it. FoxgloveWindow (FOXGLOVE_MULTIVERSAL.APP: flora ASCII +
 * spec column) and ReadmeWindow (readme.txt). Exposed on window.*.
 */
(function () {
  const React = window.React;
  const h = React.createElement;
  function useDrag(x0, y0) {
    const [p, setP] = React.useState({
      x: x0,
      y: y0
    });
    const ref = React.useRef(p);
    ref.current = p;
    const off = React.useRef(null);
    return [p, {
      onPointerDown: e => {
        off.current = {
          dx: e.clientX - ref.current.x,
          dy: e.clientY - ref.current.y
        };
        e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
      },
      onPointerMove: e => {
        if (off.current) setP({
          x: e.clientX - off.current.dx,
          y: e.clientY - off.current.dy
        });
      },
      onPointerUp: () => {
        off.current = null;
      },
      style: {
        cursor: "grab",
        touchAction: "none"
      }
    }];
  }
  const MONO = "'IBM Plex Mono', monospace";
  /* PLACEHOLDER links — swap for real handles before launch */
  const LINKS = [["X / TWITTER", "https://x.com/xgvestudios"], ["ITCH.IO", "https://xgve.itch.io"], ["GITHUB", "https://github.com/xgve"], ["DISCORD", "https://discord.gg/xgve"]];
  const WISHLIST_URL = ""; // set to the Steam/itch store page when live — chip becomes the wishlist link

  function RetroWindow({
    title,
    x0,
    y0,
    w,
    onClose,
    children
  }) {
    const [p, dragProps] = useDrag(x0, y0);
    return h("div", {
      style: {
        position: "fixed",
        left: p.x,
        top: p.y,
        width: w,
        zIndex: 90,
        background: "#070709",
        border: "1px solid #33363d",
        boxShadow: "0 12px 40px rgba(0,0,0,.6)",
        fontFamily: MONO,
        animation: "xgwin-in .16s ease-out"
      }
    }, h("div", Object.assign({}, dragProps, {
      style: Object.assign({
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        borderBottom: "1px solid #33363d",
        userSelect: "none"
      }, dragProps.style)
    }), h("button", {
      onClick: onClose,
      title: "Close",
      className: "xgwin-close",
      style: {
        width: 11,
        height: 11,
        flex: "none",
        background: "transparent",
        border: "1px solid #83848c",
        cursor: "pointer",
        padding: 0
      }
    }), h("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#c6ced8",
        textTransform: "uppercase",
        overflow: "hidden",
        whiteSpace: "nowrap"
      }
    }, title), h("span", {
      style: {
        width: 11,
        flex: "none"
      }
    })), children);
  }
  function Flora({
    w,
    hpx
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const cv = ref.current,
        g = window.XG_ASCII && window.XG_ASCII.foxglove;
      if (!cv || !g) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = w * dpr;
      cv.height = hpx * dpr;
      cv.style.width = w + "px";
      cv.style.height = hpx + "px";
      const x = cv.getContext("2d");
      x.scale(dpr, dpr);
      const C = g.cols,
        R = g.rows,
        ch = hpx / R,
        cw = ch * 0.62;
      const ox = (w - cw * C) / 2;
      const t0 = performance.now();
      let raf = 0,
        prev = 0;
      const NOISE = "01#@%&$X=+*".split("");
      function paint(now) {
        if (now - prev > 90) {
          prev = now;
          const el = (now - t0) / 2800,
            rf = el >= 1 ? 1 : el * el * (3 - 2 * el);
          x.clearRect(0, 0, w, hpx);
          x.textBaseline = "middle";
          x.textAlign = "center";
          x.font = "500 " + (ch * 0.95).toFixed(1) + "px " + MONO;
          for (let yy = 0; yy < R; yy++) {
            const o = 1 - yy / R; // bottom builds first (like the original)
            if (o > rf) continue;
            const cr = g.chars[yy] || "",
              kr = g.colors && g.colors[yy] || "";
            for (let xx = 0; xx < C; xx++) {
              let c = cr[xx];
              if (c === " " || c === undefined) continue;
              if (rf < 1 && o > rf - 0.08) c = NOISE[Math.random() * NOISE.length | 0];else if (Math.random() < 0.012) c = NOISE[Math.random() * NOISE.length | 0];
              const hsh = (xx * 7 + yy * 13) % 23;
              x.fillStyle = kr[xx] === "r" || hsh === 0 ? "#e6202e" : hsh < 3 ? "#4fa3c0" : hsh < 8 ? "#6f7480" : "#c6ced8";
              x.fillText(c, ox + xx * cw + cw / 2, yy * ch + ch / 2);
            }
          }
        }
        raf = requestAnimationFrame(paint);
      }
      raf = requestAnimationFrame(paint);
      return () => cancelAnimationFrame(raf);
    }, [w, hpx]);
    return h("canvas", {
      ref: ref,
      "aria-hidden": true,
      style: {
        display: "block",
        flex: "none"
      }
    });
  }
  function FoxgloveWindow({
    onClose
  }) {
    return h(RetroWindow, {
      title: "FOXGLOVE_MULTIVERSAL.APP",
      x0: Math.max(12, window.innerWidth - 560),
      y0: 80,
      w: Math.min(480, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        display: "flex",
        gap: 18,
        padding: 16
      }
    }, h(Flora, {
      w: 240,
      hpx: 330
    }), h("div", {
      style: {
        flex: 1,
        minWidth: 0,
        paddingTop: 8
      }
    }, h("div", {
      style: {
        fontSize: 10,
        letterSpacing: "0.22em",
        color: "#565b64",
        textTransform: "uppercase"
      }
    }, "FLORA_SERIES"), h("div", {
      style: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1.08,
        color: "#fff",
        margin: "10px 0 14px"
      }
    }, "Foxglove", h("br"), "Multiversal"), h(WISHLIST_URL ? "a" : "div", {
      href: WISHLIST_URL || undefined,
      target: WISHLIST_URL ? "_blank" : undefined,
      style: {
        display: "inline-block",
        background: "#c11722",
        color: "#fff",
        fontSize: 10,
        letterSpacing: "0.16em",
        padding: "6px 10px",
        marginBottom: 18,
        textDecoration: "none",
        cursor: WISHLIST_URL ? "pointer" : "default"
      }
    }, WISHLIST_URL ? "\u25cf WISHLIST" : "\u25cf IN DEVELOPMENT"), h("div", {
      style: {
        fontSize: 12,
        lineHeight: 2,
        color: "#6f7480"
      }
    }, h("div", null, "Clock in."), h("div", {
      style: {
        color: "#9a4a52"
      }
    }, "Roll back."), h("div", null, "Clock in again.")))));
  }
  function ReadmeWindow({
    onClose
  }) {
    return h(RetroWindow, {
      title: "readme.txt",
      x0: Math.max(12, Math.min(70, window.innerWidth - 372)),
      y0: Math.max(60, window.innerHeight - 360),
      w: Math.min(360, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        padding: "18px 20px 22px",
        fontSize: 12.5,
        lineHeight: 1.95,
        color: "#c6ced8"
      }
    }, h("div", null, "XGVE is a vibecoded games studio."), h("div", null, "We build our own worlds \u2014 and ship"), h("div", null, "client apps in days, not quarters."), h("div", {
      style: {
        marginTop: 22,
        color: "#565b64"
      }
    }, "// continuity note ................"), h("div", {
      style: {
        color: "#3f434c"
      }
    }, "you have been here before.")));
  }
  function ContactWindow({
    onClose
  }) {
    const [em, setEm] = React.useState("");
    const dim = {
      color: "#565b64"
    };
    const lnk = {
      color: "#c6ced8",
      textDecoration: "none",
      letterSpacing: "0.12em"
    };
    return h(RetroWindow, {
      title: "contact.txt",
      x0: Math.max(12, (window.innerWidth - 380) / 2),
      y0: 110,
      w: Math.min(380, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        padding: "18px 20px 22px",
        fontSize: 12.5,
        lineHeight: 2,
        color: "#c6ced8"
      }
    }, h("a", {
      href: "mailto:hello@xgve.io",
      style: {
        color: "#fff",
        textDecoration: "none",
        letterSpacing: "0.1em"
      }
    }, "hello@xgve.io"), h("div", {
      style: Object.assign({
        marginTop: 16
      }, dim)
    }, "// socials"), LINKS.map(function (l) {
      return h("div", {
        key: l[0]
      }, h("a", {
        href: l[1],
        target: "_blank",
        rel: "noopener",
        style: lnk
      }, l[0]));
    }), h("div", {
      style: Object.assign({
        marginTop: 16
      }, dim)
    }, "// mailing list"), h("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 6
      }
    }, h("input", {
      value: em,
      onChange: function (e) {
        setEm(e.target.value);
      },
      placeholder: "you@domain",
      style: {
        flex: 1,
        minWidth: 0,
        background: "#0b0b0e",
        border: "1px solid #33363d",
        color: "#e9eaec",
        fontFamily: MONO,
        fontSize: 12,
        padding: "7px 9px",
        outline: "none"
      }
    }), h("button", {
      onClick: function () {
        location.href = "mailto:hello@xgve.io?subject=Mailing%20list&body=" + encodeURIComponent("Subscribe: " + em);
      },
      style: {
        background: "transparent",
        border: "1px solid #83848c",
        color: "#e9eaec",
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: "0.14em",
        padding: "7px 10px",
        cursor: "pointer"
      }
    }, "[ SUBSCRIBE ]"))));
  }
  window.XGVE_FoxWindow = FoxgloveWindow;
  window.XGVE_ReadmeWindow = ReadmeWindow;
  window.XGVE_ContactWindow = ContactWindow;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-windows.jsx", error: String((e && e.message) || e) }); }

// deploy/site/xgve-work.jsx
try { (() => {
/* XGVE Studios — Selected Work overlay.
 * A no-scroll, in-place reveal. Foxglove Multiversal is the only project; clicking
 * it opens the Foxglove Multiversal landing (direction 1c).
 */
(function () {
  const React = window.React;
  const {
    useState
  } = React;
  const PROJECTS = [{
    id: "foxglove",
    name: "Foxglove Multiversal",
    type: "Game",
    year: "TBC"
  }];
  function WorkOverlay({
    onClose
  }) {
    const [openId, setOpenId] = useState(null);
    const FoxgloveLanding = window.XGVE_FoxgloveLanding;
    React.useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") {
          if (openId) setOpenId(null);else onClose();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [openId, onClose]);
    if (openId === "foxglove" && FoxgloveLanding) {
      return React.createElement(FoxgloveLanding, {
        onClose: () => setOpenId(null)
      });
    }
    return React.createElement("section", {
      className: "work",
      "data-screen-label": "Selected work"
    }, React.createElement("div", {
      className: "work-head"
    }, React.createElement("div", {
      className: "work-eyebrow"
    }, "Selected work ", React.createElement("b", null, "// " + PROJECTS.length)), React.createElement("button", {
      className: "navlink work-eyebrow",
      onClick: onClose,
      style: {
        pointerEvents: "auto",
        cursor: "pointer",
        background: "none",
        border: 0,
        color: "var(--content-secondary)"
      }
    }, "Close \u2715")), React.createElement("div", {
      className: "work-list"
    }, PROJECTS.map((p, i) => React.createElement("div", {
      className: "work-row",
      key: p.id,
      onClick: () => setOpenId(p.id),
      style: {
        cursor: "pointer"
      }
    }, React.createElement("div", {
      className: "work-idx"
    }, String(i + 1).padStart(2, "0")), React.createElement("div", {
      className: "work-name"
    }, p.name, React.createElement("span", {
      className: "arrow"
    }, "\u2192")), React.createElement("div", {
      className: "work-type"
    }, p.type), React.createElement("div", {
      className: "work-year"
    }, p.year)))), React.createElement("div", {
      className: "work-note"
    }, "Open a project to view it."));
  }
  window.XGVE_WorkOverlay = WorkOverlay;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deploy/site/xgve-work.jsx", error: String((e && e.message) || e) }); }

// design-handoff/ascii-foxglove/source/ascii-data.js
try { (() => {
window.XG_ASCII = {
  "emblem": {
    "cols": 82,
    "rows": 35,
    "chars": ["                                                                                  ", "                                ;:;~!|-ir|-|;:                                    ", "                           ,:xw0Q@gNMNB&BNB$g@#w?r'                               ", "                       .rt$8$#@W0Q@35P%e9F#QXg&Q$#X86i`                           ", "                     +o&WH#$gS+;'            ,ir%XB$8&MS:                ,i`      ", "                   |wg$W0#;.                      `~##&M&8x'          ,|>:   LE.  ", "   `.            -8N8@Q7.                            ,c@W0#&t       :>F+  :-:;:   ", "    `i?~;      .5W0B#:                                  +5Ng$w;  '<3#=    ,:;     ", "      '1M2i`  .0gX8+                                      =w1,:;FXS!   xQr        ", "        ;t&#oc!';L`                                         ,>XB@~  ,' ','        ", "           +g0WHjr'                                      ;i9MXgv:  +ga            ", "           ~`=EMN#0F?:                                 ~+gH#$t;    :`:            ", "          ~$Q! !FN#0#N8L|                           :v5X8@8t.                     ", "          oQH6   =3gNgNWHW>i,                    .-3NMXB$t,                       ", "         !Q$g+     ,?&W&#XgNM6?;              .-oNW&g0Mc.;:    ;~-|r|`            ", "         6NQ$'       .<93P55#e2#&?;         ,>H8080Q@t;|#=     E&M@B$M            ", "         $W&S     .rc+t>7tj?L1<wMNQ0%95wwwo2QXBHB&BF=+#&c      ,i-6X#N'           ", "         #XMF       !6aFPPFo59o20BHMc+j1t*@QX#XM$9!.?P-'          58HQ;           ", "         XM@e          !=r|;:-1$#@>;      .tBX#a|`'r:             5$B&.           ", "         SN8@.         '+jt+v*c??:          ;i;:                  HWHa            ", "         +QNM*                                                   !W@B>            ", "          #W0M,               `60j,        .x81:                 w&W&.            ", "          ~XMNa`            :xQ&#$#L.    ;+&8N#H?,              >$MN<             ", "           :@M&o          ,<$W@#&g0#@1 '7#HBX#Ng$QL:           =$QNo              ", "            >Ng$o`      .?Q$#$7, +F&#@MN#&#F. :LBXQH+;        i$#HS`              ", "             ~XB@8!    <N8N#!.     =38HgX6-     ;~2g@Q!:     *X8@S;               ", "              .9M@~  +gXg5|          !%e|          +5HgX:   wXQ$c                 ", "                !: ~5W@j`                            .>WX#+ `##~                  ", "                 rB$or `=                            `. |P#Ni                     ", "               |2W*' :%WXg?|`                     ;t$8XL` ;?&2-                   ", "             ;F#:     ~6W0W@g5t-~;          ';=>P0QNQHE*.    !9E=                 ", "           :+7;         ,:wQ&WHMNB@Q0P2%3QXgHWXgHB&w-.         :*>`               ", "         ,:;                '!xag@W$Q@W@gXW&#&2x:`                .`:             ", "                                  `'+=r:r~;'                                      ", "                                                                                  "],
    "colors": ["..................................................................................", "................................wwwwwwwwwwwwww....................................", "...........................wwwwwwwwwwwwwwwwwwwwwwww...............................", ".......................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........................", ".....................wwwwwwwwwwww............wwwwwwwwwwww................rrr......", "...................wwwwwwwww......................wwwwwwwwww..........rrrr...rrr..", "...ww............wwwwwwww............................wwwwwwww.......rrrr..rrrrr...", "....wwwww......wwwwwww..................................wwwwwww..rrrrr....rrr.....", "......wwwwww..wwwwww......................................wwwwrrrrrr...rrr........", "........wwwwwwwwwww.........................................rrrrrr..rr.rrr........", "...........wwwwwwww......................................rrrrrrrr..rrr............", "...........wwwwwwwwwww.................................rrrrrrrr....rrr............", "..........wwww.wwwwwwwwww...........................rrrrrrrrr.....................", "..........wwww...wwwwwwwwwwww....................rrrrrrrrrr.......................", ".........wwwww.....wwwwwwwwwwwww..............rrrrrrrrrrrrr....wwwwwww............", ".........wwwww.......wwwwwwwwwwwwww.........rrrrrrrrrrrrrr.....wwwwwww............", ".........wwww.....wwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrr......wwwwwwww...........", ".........wwww.......wwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrr..........wwwww...........", ".........wwww..........wwwwwwwwwwwww......rrrrrrrrrrr.............wwwww...........", ".........wwwww.........wwwwwwwwwww..........rrrr..................wwww............", ".........wwwww...................................................wwwww............", "..........wwwww...............wwwww........wwwww.................wwwww............", "..........wwwwww............wwwwwwwww....wwwwwwwww..............wwwww.............", "...........wwwww..........wwwwwwwwwwww.wwwwwwwwwwwww...........wwwww..............", "............wwwwww......wwwwwwww.wwwwwwwwwwww.wwwwwwww........wwwwww..............", ".............wwwwww....wwwwwww.....wwwwwwww.....wwwwwwww.....wwwwww...............", "..............wwwww..wwwwww..........wwww..........wwwwww...wwwww.................", "................ww.wwwwww............................wwwwww.wwww..................", ".................wwwww.ww............................ww.wwwww.....................", "...............wwwww.wwwwwwww.....................wwwwwww.wwwww...................", ".............wwww.....wwwwwwwwwwww..........wwwwwwwwwwwww....wwww.................", "...........wwww.........wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........wwww...............", ".........www................wwwwwwwwwwwwwwwwwwwwww................www.............", "..................................wwwwwwwwww......................................", ".................................................................................."]
  },
  "wordmark": {
    "cols": 120,
    "rows": 14,
    "chars": ["                                                                                                                        ", "  ,=w%Sa3ax:             :cxxj<><i;   `>waea9P3SP2SS5Ewe#a#aeo++>?cL!                  :t?<+L|    !S2PPSa556#5ow%w5%t.  ", "    'xBXMX#$x`         ;>&W0#Xwc:   'SB&BNB$g@#@B0BXQXM0gHg&5; ;20B$ML                |&BXB$*   =##&8@M@#NMHgH#$M$ML'   ", "      ;>$W@M@Q6:     'FW&g$8w=    ;3$WNM$L7tc?Lj1t<7<*v<>v*=    `%$#NW6.             =XW&W@~   |t?LLv7+<tt>v*ct*Lj`     ", "         ra0W@Q@1  ;5$W&WH+,      :HW0Wv                          <08XgE.           ?XBN8P:                             ", "           'cM3: ~HWNg$Wt.        -8HMN.                           vXMHM0:        ;#NQX8a.                              ", "               vW$8N8@<,          =&M&8,        +NM&WXB@W0#&Q0QL    :NM@B@=      ,9XQNM+    #0MNBNgHWX#&#H8@#w'         ", "             :0W@W0B!'+.          ;g$BN.       :%#&BHM0W@WNg$Q&6     .EQ&80+    ;6HgXW!     $#@MHBNM@W@B@B&M-           ", "          .jQXB0gEi;?NM&o`        :Hg@8;         ,|r~+=-i+=wgXg2      'aQN80L  !8H#$6,      B@#@L+:-=;i+i+i             ", "        ;t&#HBX3;  .>#&#$BE:      -g&M@:                   %$WX3        >W$QX%v8@#$%,       @BHg+                       ", "      '?BHg$gF|      ;tH80Q0P!    =0g@8$i,'`.,.`.,.`.;.,.;<NMXgw         rW&gX80Q0#`        8$Q$8a=`';.,'`.,.,.;:       ", "    ,10QN#@9!          .*W$#@Qe=   :XM@W$g@W&Q@8@W0Q&#HW$gH#$Wj:          +#XB&Q$x          ;*&MXQ@W&MHM$BHQ&QHQNM+     ", "  'j#@gHWE.              ;+$#NBX8r   !#0BX8@g0Q@BHB0MNMX8@8@2,             ,#0B&1             .tB&g0WH#$QNW0BNQ&Q&8N:   ", "  ;:,'`.;                   ,'`:;.     ',.`.`';',.`'`'`:;:,'                ;.`.                 ';',.,';:,';:`';:;:,   "],
    "colors": ["........................................................................................................................", "..wwwwwwwwww.............wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwwrrrrrr..................rrrrrrr....wwwwwwwwwwwwwwwwwwww..", "....wwwwwwwwww.........wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwww.wrrrrrr................rrrrrrr...wwwwwwwwwwwwwwwwwwwww...", "......wwwwwwwwww.....wwwwrrrrr....wwwwwwwwwwwwwwwwwwwwwwwwww....wrrrrrrw.............rrrrrrr...wwwwwwwwwwwwwwwwwwww.....", ".........wwwwwwww..wwwwwwwww......wwwwww..........................rrrrrrw...........rrrrrrw.............................", "...........wwwww.wwwwwwwww........wwwwww...........................rrrrrrr........wrrrrrrw..............................", "...............wwwwwwwww..........wwwwww........wwwwwwwwwwwwwwww....rrrrrrr......wrrrrrr....wwwwwwwwwwwwwwwwwww.........", ".............wwwwwwwwwww..........wwwwww.......wwwwwwwwwwwwwwwww.....wrrrrrr....rrrrrrr.....wwwwwwwwwwwwwwwww...........", "..........wwwwwwwwwwwwwwww........wwwwww.........wwwwwwwwwwwwwww......wrrrrrr..rrrrrrr......wwwwwwwwwwwwwww.............", "........wwwwwwwww..wwwwwwwww......wwwwww...................wwwww........rrrrrrrrrrrrw.......wwwww.......................", "......wwwwwwwww......wwwwwwwww....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........rrrrrrrrrrw........wwwwwwwwwwwwwwwwwwwww.......", "....wwwwwwwww..........wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwww..........rrrrrrrr..........wwwwwwwwwwwwwwwwwwwwwww.....", "..wwwwwwwww..............wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwww.............rrrrrr.............wwwwwwwwwwwwwwwwwwwwwww...", "..wwwwwww...................wwwwww.....wwwwwwwwwwwwwwwwwwwww................wwww.................wwwwwwwwwwwwwwwwwwww..."]
  },
  "foxglove": {
    "cols": 74,
    "rows": 67,
    "chars": ["                                                                          ", "                                                          `|,             ", "                                                  ';'r   ;tF<             ", "                                                 t<76g`.r#$?j             ", "                                           ;~!:  -3S8&t*#w*,.;            ", "                                           |X56:,:19#+**j+xae|            ", "                                           ,6&2@6-=&PSa@W0#t:     .`      ", "                                           .cQ@Mvxow-i<j1v!:;             ", "                                     `'ri+=`.`i%a@gto<wEM$gw1v:           ", "                                  -+#268E#2aN+-cP~`~&cv%HWNQ$W?           ", "                              '!=,:+x38ae%E0+58XM-.`gE8evve9~,            ", "                           .rQ08&%oPxx7WEP@F13<~+6+t,EH9;:          `     ", "                         +#$#NBo85%Ea3',to9jL;',F27w5;:;                  ", "                         '>QHw#5HF&tr' '<t+o71!'+Fj3632i                  ", "                   ,       `>N8&L??x*?<a#wPFw56-~EW&g0ac                  ", "                         :r7c7tt+|;>7aXeFwEFeEFw+=3w-'                    ", "                     ;|>#@Q966E<ea|+<9=r17#N2SBHBL.                       ", "                    3BaBPPFo>9L20=;>5:;1t*cQX#5E2'                        ", "              '    `LF%HFF%2?eBF*x>aM@o>96FHLxj;:                         ", "                -i;'`i;'PWt#&*c.?~w6-i5QeWFx@t2M+                         ", "        .`     *6&g$Sa5N*>6>~7g,|e:+x-*?x57!|Hg3~                         ", "               c<WXgwS9#@1+Fo3j><j+i+?evF3$Bw|;          ',               ", "               `7X#&855o:+i;|xw1?<~!:26P5HB&8N<;                          ", "                ;=;7tjee27%<#W22#*j<rS$3NEHBX#Ngoi`              '        ", "              .!jH80FF7Po?:6#$8X6<xv:;256&#NB3SoBX5                       ", "            `~oB@%3S6v<o+:w8PW&M#<1w!',gX8+|!c*#$7`      :                ", "  :      ,*#6@WHMPSo1vLXj5M&8H80P>eL  :H#aMEaw8@gr                        ", "         .eB&gH8$#ES595BHg7.;|!vSg5=,~;~r=PM0Qai,  '`=              ;.    ", "          :3w>ioBN<LgNi`wXw>+r.x|>g;:,'r1*?wP6xr' '  r.                   ", " '        !Q&Q3v>WH#v:,.+*$WXQ08@M$>+:#E>a9QN#0gX2%S$8v.                  ", " ;     `. .;P@F#*w2r|+c-|>7%g0#E'j.-?>c%FP2XB$g080Q6<2B`   `',            ", "    ,'cw7:+i-2ao%6S1+:t:7:; +oP:;'c11P2%3PXgHWP|`.;=EML.`~S#52!           ", "  'xg&a3#@WHM@WwSj>;=-~jv,.,ijxti .LF7*Lo95&#+.,.`:rw&=!>w2cW&o           ", "  ,iH8%c-=w8HWH5FSjtx*1a;~E+*?<<#j`'cQH#5SHM`:;'`|?j@#@?o5SwNe,        '  ", "   ;'*a#x?:;W@8H#5#v6#+;xjoS7SF+*E7`|*:1#XW;:ri;<*72Q&F7EE5&W-            ", "     |##7j,.,7@8*?P5ai;iSaoWPM$o?Lo:,~L~`W<~vc1>x*XMvjj16w0%0|,           ", "     !8NEx?j.,PXe@QL:;|!M6WNM0Q&3o7<.L21i+80#og$6$81vEo?P#QXB%L,:`'       ", "     .,BHa3E+~rW@>ri+i,i$2NB@B@8$9aL;i<e!i-:;'LeejcL*%E#XBXEr~P63#v       ", "     +B0M$W02XW3|-j!|!+`8eB$B@Q@aHB&=;:tt;|-:; ,:ct+<+#%B&?`ixc9M-:       ", "     .+j;'-6ES+t#9ccv>6:NWXx!:`'+i+e06,=!t*tE+c|!'<9SaP#$~,=teES0B`       ", "         ;:!WN35oEFxj5o2Qj=;~-ircrj7o$:;<cv?Excv?;i,>$20=rv65&Q@B,        ", "  ,     ;g$WwgN8Hw+vw3+gNW@3?PaS@#@#&';t-1cg$ME9F6#~;6$262XQN+,:          ", "         `>PL!:-#H#%#- `xE3e3HgX87*+:`xt?7w0QN#082#9.,?3x,:+i           : ", "       'x#FQ#ar|`=Nw+ ;'!'`.;|xo*:  `:x+E3w8HW@gNQ02#:,:?7w9`           ; ", "      .&MXM@8@%6B5LH7`+t?-~;  .?#+ ,'twwcSE&#NgHM$MN#57-7E*+<j'           ", "       =;:,.o#0L5W0jcL7%L~?Lr `~e*`  :Eeae5M&M0Q0358SW&35~,22?            ", "                 ,.L6wP#*LjeP` `<5i   =@5PM$M?|;.,.+<7M$:!~3a6>           ", "                 =0MoFEBa<vaH8,:;%t:   =ag$x,.;.,';*2Q*'-+x+XgN           ", "    '            `tNB6aeQHPo>!  =5?v   ;WHi+ir+++x1egHtr*wWX5r:           ", "                   x0W3EXWNj`   -21<  ,=NaceS6vv+t@g$vwQNgP'              ", "          :         .!**.;       59v:-+v>#80LXMe#XB;: .+*r          :;    ", "          `      '`            = 7e>;+c:     '>aF:;                       ", "                               ` !3x77.                ;:       :         ", "             :vctij:`. i         |P6?.        ,ij1<1x7xj1                 ", "              |*ee6ta5jP:;       -9#+      ,x*t71+:jv@6-:                 ", "                ,1$<7|;c263i,    :w7- `: '!ov|;i;<c5H>,    ';             ", "                 `+aw7c+i+xL7;   ;xvL :`.r<+|!j?7%#Fj                     ", "                   |e#E9<~;|!cc  'tct:,.-~;:x>>#0#x'                      ", "                    .+x@#Lt-:;~* ;7v?  ;=!9EQ5Lr=                         ", "                        rcwS1Fcir jjx',~P3!:                              ", "                  :,        .;#0?;ixj,ta'              ;'                 ", "                               'F9r7>j*.                                  ", "                                'HxL=v'                                   ", "                             .   |##-=      +                             ", "                             !   ,a5xr:                                   ", "                       '         .9v1.`                                   ", "                                  w+t!                                    "],
    "colors": ["..........................................................................", "..........................................................www.............", "..................................................wwww...wwww.............", ".................................................wwwwwwwwwwww.............", "...........................................wwww..wwwwwwwwwwwww............", "...........................................wwwwwwwwwwwwwwwwwww............", "...........................................wwwwwwwwwwwwwwwwww.....ww......", "...........................................wwwwwwwwwwwwwwwwww.............", ".....................................wwwwwwwwwwwwwwwwwwwwwwwwww...........", "..................................wwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..............................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww............", "...........................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........w.....", ".........................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".........................wwwwwwwwwwwww.wwwwwwwwwwwwwwwww..................", "...................w.......wwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".........................wwwwwwwwwwwwwwwwwwwwwwwwwwwww....................", ".....................wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......................", "....................wwwwwwwwwwwwwwwwwwwwwwwwwwwwww........................", "..............w....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "........ww.....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "...............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........ww...............", "...............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........................", "................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..............w........", "..............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......................", "............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww......w................", "..w......wwwwwwwwwwwwwwwwwwwwwwwwwww..wwwwwwwwwwww........................", ".........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..www..............ww....", "..........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.w..ww...................", ".w........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".w.....ww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...www............", "....wwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww........w..", "...wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww............", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww........", "..w.....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........", ".........wwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........w.", ".......wwwwwwwwwwwwww.wwwwwwwwwwww..wwwwwwwwwwwwwwwwwwwwwwwww...........w.", "......wwwwwwwwwwwwwwwwwwwwww..wwww.wwwwwwwwwwwwwwwwwwwwwwwwwwww...........", ".......wwwwwwwwwwwwwwwwwwwwww.wwwww..wwwwwwwwwwwwwwwwwwwwwwwww............", ".................wwwwwwwwwwwww.wwww...wwwwwwwwwwwwwwwwwwwwwwwww...........", ".................wwwwwwwwwwwwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwww...........", "....w............wwwwwwwwwwwww..wwww...wwwwwwwwwwwwwwwwwwwwwwww...........", "...................wwwwwwwwww...wwww..wwwwwwwwwwwwwwwwwwwwww..............", "..........w.........wwwwww.......wwwwwwwwwwwwwwwwwwww.wwww..........ww....", "..........w......ww............w.wwwwwww.....wwwwww.......................", "...............................w.wwwwww................ww.......w.........", ".............wwwwwwwww.w.........wwwww........wwwwwwwwwww.................", "..............wwwwwwwwwwww.......wwww......wwwwwwwwwwwwww.................", "................wwwwwwwwwwwww....wwww.ww.wwwwwwwwwwwwww....ww.............", ".................wwwwwwwwwwwww...wwww.wwwwwwwwwwwwwww.....................", "...................wwwwwwwwwwww..wwwwwwwwwwwwwwwwwww......................", "....................wwwwwwwwwwww.wwww..wwwwwwwwww.........................", "........................wwwwwwwww.wwwwwwwwww..............................", "..................ww........wwwwwwwwwwwww..............ww.................", "...............................wwwwwwwww..................................", "................................wwwwwww...................................", ".............................w...wwwww......w.............................", ".............................w...wwwwww...................................", ".......................w.........wwwwww...................................", "..................................wwww...................................."]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-handoff/ascii-foxglove/source/ascii-data.js", error: String((e && e.message) || e) }); }

// design-handoff/ascii-foxglove/source/xgve-foxglove-ghost.js
try { (() => {
/* XGVE Studios — dual alternating ASCII reveal, white, layered over the field.
 * A: the REAL Foxglove trademark art (XG_ASCII.foxglove) FAR RIGHT — builds up
 *    bottom-first, holds, disintegrates, morphing out of the background field.
 * B: big XGVE wordmark (XG_ASCII.wordmark) BOTTOM-LEFT — builds left→right.
 * Alternate (never together). NOTE: this uses the brand's own 2D ASCII art — a
 * faithful trademark. A true parametric 3D foxglove would need a 3D model/depth
 * source of the mark (can't be fabricated from the flat art).
 * window.XGVE_initFoxgloveGhost(canvas).
 */
(function () {
  var NOISE = "01#@%&$X=+*<>/\\|".split("");
  var SHIM = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>?!".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  function smooth(t) {
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return t * t * (3 - 2 * t);
  }
  window.XGVE_initFoxgloveGhost = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1;
    function size() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth;
      H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    var foxCells = null,
      wordCells = null;
    function prepGrid(key, ord) {
      var g = window.XG_ASCII && window.XG_ASCII[key];
      if (!g) return null;
      var C = g.cols,
        R = g.rows,
        chars = g.chars,
        cols = g.colors || [],
        cells = [];
      for (var y = 0; y < R; y++) {
        var row = chars[y] || "",
          kr = cols[y] || "";
        for (var x = 0; x < C; x++) {
          var c = row[x];
          if (c === " " || c === undefined) continue;
          var di = DENS.indexOf(c);
          cells.push({
            x: x,
            y: y,
            ch: c,
            red: kr[x] === "r",
            o: ord(x, y, C, R),
            d: di < 0 ? 0.5 : di / (DENS.length - 1)
          });
        }
      }
      return {
        C: C,
        R: R,
        cells: cells
      };
    }
    function prep() {
      foxCells = prepGrid("foxglove", function (x, y, C, R) {
        return 1 - y / R;
      }); // bottom-first
      wordCells = prepGrid("wordmark", function (x, y, C, R) {
        return x / C;
      }); // left→right
    }
    var T = [{
      Tb: 4.2,
      Th: 2.6,
      Td: 3.0,
      Tg: 1.1
    }, {
      Tb: 3.0,
      Th: 1.8,
      Td: 2.2,
      Tg: 1.1
    }];
    var raf = 0,
      prev = 0,
      tt = 0,
      idx = 0,
      subStart = 0,
      lastPaint = 0,
      pClear = false;
    function phaseRF(e, d) {
      if (reduced) return 1;
      if (e < d.Tb) return smooth(e / d.Tb);
      if (e < d.Tb + d.Th) return 1;
      if (e < d.Tb + d.Th + d.Td) return 1 - smooth((e - d.Tb - d.Th) / d.Td);
      return -1;
    }
    function drawGrid(g, rf, cx, hFrac, wFrac, place, exact) {
      if (!g) return;
      var C = g.C,
        R = g.R,
        ch = H * hFrac / R,
        cw = ch * 0.6;
      if (cw * C > W * wFrac) {
        cw = W * wFrac / C;
        ch = cw / 0.6;
      }
      var blockW = cw * C,
        blockH = ch * R;
      var ox = place === "bl" ? W * 0.04 : cx * W - blockW / 2;
      var oy = place === "bl" ? H * 0.9 - blockH : (H - blockH) / 2;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "500 " + (ch * 0.95).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = performance.now() * 0.012 | 0;
      var ts = performance.now() * 0.001;
      var mask = new Set();
      for (var i = 0; i < g.cells.length; i++) {
        var cell = g.cells[i],
          reveal = rf - cell.o;
        if (reveal <= 0) continue;
        var glyph;
        if (reveal < 0.06) glyph = NOISE[Math.random() * NOISE.length | 0];else if (exact) glyph = Math.random() < 0.015 ? NOISE[Math.random() * NOISE.length | 0] : cell.ch;else glyph = SHIM[(cell.x * 17 + cell.y * 29 + salt) % SHIM.length];
        var px = ox + cell.x * cw + cw / 2,
          py = oy + cell.y * ch + ch / 2;
        var sway = Math.sin(ts * 0.55);
        px += (cell.d - 0.5) * 30 * sway; // pseudo-depth parallax (both subjects)
        var lite = 0.85 + 0.35 * (cell.d - 0.5) * Math.sin(ts * 0.55 + 0.6);
        mask.add((px / 24 | 0) * 4096 + (py / 24 | 0));
        var wv = Math.sin(px * 0.011 + ts * 1.2) + Math.sin(py * 0.013 - ts * 0.9);
        ctx.globalAlpha = Math.min(1, smooth(reveal / 0.22) * (0.52 + 0.24 * (wv * 0.25 + 0.5)) * lite);
        var isRed = cell.red || exact && (cell.x * 7 + cell.y * 13) % 11 === 0;
        ctx.fillStyle = isRed ? "rgba(230,32,46,0.95)" : "rgba(198,204,214,0.95)";
        ctx.fillText(glyph, px, py + wv * 2.4);
      }
      window.XGVE_RMASK = mask;
    }
    function draw(now) {
      if (window.XGVE_PAUSED) {
        if (!pClear) {
          ctx.clearRect(0, 0, W, H);
          window.XGVE_RMASK = null;
          pClear = true;
        }
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      }
      pClear = false;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016;
      prev = now;
      tt += reduced ? 0 : dt;
      if (now - lastPaint < 33) {
        raf = requestAnimationFrame(draw);
        return;
      } // ~30fps paint, timeline stays true
      lastPaint = now;
      ctx.clearRect(0, 0, W, H);
      var cur = reduced ? 0 : idx,
        d = T[cur],
        e = tt - subStart;
      if (!reduced && e >= d.Tb + d.Th + d.Td + d.Tg) {
        idx = (idx + 1) % 2;
        subStart = tt;
        window.XGVE_RMASK = null;
        raf = requestAnimationFrame(draw);
        return;
      }
      var rf = phaseRF(e, d);
      if (rf >= 0) {
        if (cur === 0) drawGrid(foxCells, rf, 0.85, 0.72, 0.28, "right", true);else drawGrid(wordCells, rf, 0.30, 0.19, 0.40, "bl", false);
      } else {
        window.XGVE_RMASK = null;
        if (!reduced && (now / 500 | 0) % 2 === 0) {
          // blink where the next build starts
          var cx2 = idx === 0 ? W * 0.055 : W * 0.85,
            cy2 = idx === 0 ? H * 0.88 : H * 0.76;
          ctx.font = "500 14px 'IBM Plex Mono', monospace";
          ctx.globalAlpha = 0.7;
          ctx.fillStyle = "rgba(198,204,214,0.9)";
          ctx.fillText("\u2589", cx2, cy2);
          ctx.globalAlpha = 1;
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    var tries = 0;
    (function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.foxglove)) {
        if (tries++ < 60) {
          setTimeout(start, 80);
          return;
        }
      }
      prep();
      subStart = 0;
      raf = requestAnimationFrame(draw);
    })();
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-handoff/ascii-foxglove/source/xgve-foxglove-ghost.js", error: String((e && e.message) || e) }); }

// design-handoff/ascii-foxglove/source/xgve-foxglove.jsx
try { (() => {
/* XGVE Studios — Foxglove Multiversal landing (recreation of direction 1c).
 * Flagship game hero: flora emblem reconstructed from glyph text, spec column,
 * continuity labels. Opened from the Work overlay. Plain-React recreation
 * (no DS bundle here) — ProgressRing + buttons are simple cosmetic versions.
 */
(function () {
  const React = window.React;
  const {
    useEffect,
    useRef
  } = React;
  const NOISE = ['#', '@', '8', '0', '%', '&', '?', '7', '1', '$', 'X', 'B', 'H', ':', '.', '*', '=', '+', 'o', 'w'];

  /* Foxglove flora, reconstructed bottom-up from glyph noise (window.XG_ASCII.foxglove). */
  function FoxgloveAscii({
    font,
    dur
  }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current,
        DATA = window.XG_ASCII;
      if (!el || !DATA || !DATA.foxglove) {
        if (el) el.textContent = "";
        return;
      }
      const grid = DATA.foxglove,
        C = grid.cols,
        R = grid.rows,
        chars = grid.chars,
        cols = grid.colors;
      const fs = font,
        lh = fs * 1.15,
        cw = fs * 0.6;
      el.style.position = "relative";
      el.style.width = C * cw + "px";
      el.style.height = R * lh + "px";
      el.innerHTML = "";
      const mk = (color, glow) => {
        const p = document.createElement("pre");
        p.style.cssText = 'margin:0;position:absolute;inset:0;font-family:"IBM Plex Mono",monospace;font-size:' + fs + 'px;line-height:' + lh + 'px;white-space:pre;letter-spacing:0;color:' + color + ';text-shadow:' + glow + ';pointer-events:none;';
        return p;
      };
      const white = mk("#e9eaec", "0 0 " + fs * 0.5 + "px rgba(150,160,175,.22)");
      const red = mk("#ff2233", "0 0 " + fs * 0.9 + "px rgba(255,34,51,.5)");
      el.appendChild(white);
      el.appendChild(red);
      const th = new Float32Array(C * R);
      for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) {
        let t = 1 - y / R;
        t = t * 0.8 + Math.random() * 0.2;
        th[y * C + x] = Math.min(0.999, t);
      }
      let start = 0,
        done = false,
        raf = 0,
        lastFlick = 0;
      const render = (p, flicker) => {
        let w = "",
          r = "";
        for (let y = 0; y < R; y++) {
          const cs = chars[y] || "",
            ks = cols[y] || "",
            base = y * C;
          let wl = "",
            rl = "";
          for (let x = 0; x < C; x++) {
            const ch = cs[x];
            if (ch === " " || ch === undefined) {
              wl += " ";
              rl += " ";
              continue;
            }
            const t = th[base + x],
              isR = ks[x] === "r";
            if (p >= t) {
              let o = ch;
              if (flicker && Math.random() < 0.012) o = NOISE[Math.random() * NOISE.length | 0];
              if (isR) {
                rl += o;
                wl += " ";
              } else {
                wl += o;
                rl += " ";
              }
            } else if (p >= t - 0.11) {
              const g = NOISE[Math.random() * NOISE.length | 0];
              if (isR) {
                rl += g;
                wl += " ";
              } else {
                wl += g;
                rl += " ";
              }
            } else {
              wl += " ";
              rl += " ";
            }
          }
          w += wl + "\n";
          r += rl + "\n";
        }
        white.textContent = w;
        red.textContent = r;
      };
      const loop = now => {
        if (!start) start = now;
        if (!done) {
          let p = (now - start) / dur;
          if (p >= 1) {
            p = 1;
            done = true;
            render(1);
          } else render(p);
        } else if (now - lastFlick > 150) {
          lastFlick = now;
          render(1, true);
        }
        raf = requestAnimationFrame(loop);
      };
      render(0);
      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }, [font, dur]);
    return React.createElement("div", {
      ref: ref,
      "aria-hidden": true
    });
  }
  function Ring({
    value,
    size
  }) {
    const r = (size - 8) / 2,
      c = 2 * Math.PI * r,
      off = c * (1 - value / 100);
    return React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        flex: "none"
      }
    }, React.createElement("svg", {
      width: size,
      height: size,
      style: {
        transform: "rotate(-90deg)"
      }
    }, React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#26262a",
      strokeWidth: 3
    }), React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#e6021b",
      strokeWidth: 3,
      strokeDasharray: c,
      strokeDashoffset: off
    })), React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: 15,
        color: "#fff",
        fontWeight: 600
      }
    }, value));
  }
  const mono = extra => Object.assign({
    fontFamily: "IBM Plex Mono, monospace"
  }, extra || {});
  function FoxgloveLanding({
    onClose
  }) {
    const btn = primary => ({
      fontFamily: "IBM Plex Mono, monospace",
      fontSize: 12,
      letterSpacing: ".1em",
      padding: "13px 22px",
      cursor: "pointer",
      border: "1px solid " + (primary ? "#e6021b" : "#313136"),
      background: primary ? "#e6021b" : "transparent",
      color: "#fff",
      textTransform: "uppercase"
    });
    const tag = mono({
      fontSize: 10,
      letterSpacing: ".1em",
      color: "#a8a9b0",
      border: "1px solid #313136",
      padding: "4px 9px"
    });
    return React.createElement("section", {
      className: "fox",
      "data-screen-label": "Foxglove Multiversal",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 70,
        background: "radial-gradient(150% 130% at 76% 50%, #0e0e11 0%, #000 60%)",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(30px,6vw,80px)",
        overflow: "hidden",
        animation: "work-in .5s ease-out both"
      }
    }, React.createElement("button", {
      onClick: onClose,
      style: mono({
        position: "absolute",
        top: 34,
        right: 40,
        zIndex: 5,
        background: "none",
        border: 0,
        color: "#83848c",
        fontSize: 11,
        letterSpacing: ".16em",
        textTransform: "uppercase",
        cursor: "pointer"
      })
    }, "\u2190 Back"),
    // ---- left: spec column ----
    React.createElement("div", {
      style: {
        width: 520,
        flex: "none",
        zIndex: 2
      }
    }, React.createElement("div", {
      style: mono({
        fontSize: 11,
        letterSpacing: ".14em",
        color: "#83848c",
        textTransform: "uppercase"
      })
    }, "Flagship // Flora_Series \u00b7 \u03b1-XGVE-7A"), React.createElement("h2", {
      style: {
        fontFamily: "Space Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(46px,6vw,72px)",
        lineHeight: .92,
        color: "#fff",
        margin: "16px 0 0",
        letterSpacing: "-.02em"
      }
    }, "Foxglove", React.createElement("br"), "Multiversal", React.createElement("span", {
      style: {
        color: "#e6021b"
      }
    }, ".")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        margin: "24px 0"
      }
    }, ["Simulation", "Roguelite", "Liminal"].map(t => React.createElement("span", {
      key: t,
      style: tag
    }, t.toUpperCase()))), React.createElement("p", {
      style: {
        fontFamily: "Inter, sans-serif",
        fontSize: 15,
        lineHeight: 1.66,
        color: "#a8a9b0",
        maxWidth: 430,
        margin: 0
      }
    }, "An alternate-history enterprise OS that reconstructs reality through text. Clock in, roll back, and watch the whole system reboot itself from institutional memory."), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        margin: "28px 0 30px"
      }
    }, React.createElement(Ring, {
      value: 98,
      size: 74
    }), React.createElement("div", {
      style: mono({
        fontSize: 10,
        lineHeight: 1.9,
        color: "#83848c",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Status: ", React.createElement("b", {
      style: {
        color: "#ff2233"
      }
    }, "TBC"), React.createElement("br"), "Engine: Continuity")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, React.createElement("a", {
      href: "mailto:hello@xgve.io?subject=Foxglove%20Multiversal%20updates",
      style: Object.assign({
        textDecoration: "none",
        display: "inline-block"
      }, btn(true))
    }, "Get updates"))),
    // ---- right: flora reconstruction ----
    React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minWidth: 0
      }
    }, React.createElement("div", {
      style: mono({
        position: "absolute",
        top: "8%",
        right: "2%",
        textAlign: "right",
        fontSize: 10,
        lineHeight: 1.7,
        color: "#83848c",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Continuity Label", React.createElement("br"), "\u03b1-XGVE-7A", React.createElement("br"), "Subject: ", React.createElement("b", {
      style: {
        color: "#e9eaec"
      }
    }, "Flora"), React.createElement("br"), "Stability: ", React.createElement("b", {
      style: {
        color: "#e9eaec"
      }
    }, "0.9837")), React.createElement("div", {
      style: mono({
        position: "absolute",
        left: "2%",
        top: "22%",
        fontSize: 10,
        lineHeight: 1.8,
        color: "#5c5d64",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Node_0043.A", React.createElement("br"), "> reconstruct", React.createElement("br"), "> validate", React.createElement("br"), "> commit"), React.createElement(FoxgloveAscii, {
      font: 8,
      dur: 4200
    })));
  }
  window.XGVE_FoxgloveLanding = FoxgloveLanding;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-handoff/ascii-foxglove/source/xgve-foxglove.jsx", error: String((e && e.message) || e) }); }

// design-handoff/ascii-foxglove/source/xgve-windows.jsx
try { (() => {
/* XGVE Studios — minimalist retro draggable windows (1b style).
 * RetroWindow: thin-border mono title-bar window, draggable by its title bar,
 * square glyph closes it. FoxgloveWindow (FOXGLOVE_MULTIVERSAL.APP: flora ASCII +
 * spec column) and ReadmeWindow (readme.txt). Exposed on window.*.
 */
(function () {
  const React = window.React;
  const h = React.createElement;
  function useDrag(x0, y0) {
    const [p, setP] = React.useState({
      x: x0,
      y: y0
    });
    const ref = React.useRef(p);
    ref.current = p;
    const off = React.useRef(null);
    return [p, {
      onPointerDown: e => {
        off.current = {
          dx: e.clientX - ref.current.x,
          dy: e.clientY - ref.current.y
        };
        e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
      },
      onPointerMove: e => {
        if (off.current) setP({
          x: e.clientX - off.current.dx,
          y: e.clientY - off.current.dy
        });
      },
      onPointerUp: () => {
        off.current = null;
      },
      style: {
        cursor: "grab",
        touchAction: "none"
      }
    }];
  }
  const MONO = "'IBM Plex Mono', monospace";
  /* PLACEHOLDER links — swap for real handles before launch */
  const LINKS = [["X / TWITTER", "https://x.com/xgvestudios"], ["ITCH.IO", "https://xgve.itch.io"], ["GITHUB", "https://github.com/xgve"], ["DISCORD", "https://discord.gg/xgve"]];
  const WISHLIST_URL = ""; // set to the Steam/itch store page when live — chip becomes the wishlist link

  function RetroWindow({
    title,
    x0,
    y0,
    w,
    onClose,
    children
  }) {
    const [p, dragProps] = useDrag(x0, y0);
    return h("div", {
      style: {
        position: "fixed",
        left: p.x,
        top: p.y,
        width: w,
        zIndex: 90,
        background: "#070709",
        border: "1px solid #33363d",
        boxShadow: "0 12px 40px rgba(0,0,0,.6)",
        fontFamily: MONO,
        animation: "xgwin-in .16s ease-out"
      }
    }, h("div", Object.assign({}, dragProps, {
      style: Object.assign({
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        borderBottom: "1px solid #33363d",
        userSelect: "none"
      }, dragProps.style)
    }), h("button", {
      onClick: onClose,
      title: "Close",
      className: "xgwin-close",
      style: {
        width: 11,
        height: 11,
        flex: "none",
        background: "transparent",
        border: "1px solid #83848c",
        cursor: "pointer",
        padding: 0
      }
    }), h("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#c6ced8",
        textTransform: "uppercase",
        overflow: "hidden",
        whiteSpace: "nowrap"
      }
    }, title), h("span", {
      style: {
        width: 11,
        flex: "none"
      }
    })), children);
  }
  function Flora({
    w,
    hpx
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const cv = ref.current,
        g = window.XG_ASCII && window.XG_ASCII.foxglove;
      if (!cv || !g) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = w * dpr;
      cv.height = hpx * dpr;
      cv.style.width = w + "px";
      cv.style.height = hpx + "px";
      const x = cv.getContext("2d");
      x.scale(dpr, dpr);
      const C = g.cols,
        R = g.rows,
        ch = hpx / R,
        cw = ch * 0.62;
      const ox = (w - cw * C) / 2;
      const t0 = performance.now();
      let raf = 0,
        prev = 0;
      const NOISE = "01#@%&$X=+*".split("");
      function paint(now) {
        if (now - prev > 90) {
          prev = now;
          const el = (now - t0) / 2800,
            rf = el >= 1 ? 1 : el * el * (3 - 2 * el);
          x.clearRect(0, 0, w, hpx);
          x.textBaseline = "middle";
          x.textAlign = "center";
          x.font = "500 " + (ch * 0.95).toFixed(1) + "px " + MONO;
          for (let yy = 0; yy < R; yy++) {
            const o = 1 - yy / R; // bottom builds first (like the original)
            if (o > rf) continue;
            const cr = g.chars[yy] || "",
              kr = g.colors && g.colors[yy] || "";
            for (let xx = 0; xx < C; xx++) {
              let c = cr[xx];
              if (c === " " || c === undefined) continue;
              if (rf < 1 && o > rf - 0.08) c = NOISE[Math.random() * NOISE.length | 0];else if (Math.random() < 0.012) c = NOISE[Math.random() * NOISE.length | 0];
              const hsh = (xx * 7 + yy * 13) % 23;
              x.fillStyle = kr[xx] === "r" || hsh === 0 ? "#e6202e" : hsh < 3 ? "#4fa3c0" : hsh < 8 ? "#6f7480" : "#c6ced8";
              x.fillText(c, ox + xx * cw + cw / 2, yy * ch + ch / 2);
            }
          }
        }
        raf = requestAnimationFrame(paint);
      }
      raf = requestAnimationFrame(paint);
      return () => cancelAnimationFrame(raf);
    }, [w, hpx]);
    return h("canvas", {
      ref: ref,
      "aria-hidden": true,
      style: {
        display: "block",
        flex: "none"
      }
    });
  }
  function FoxgloveWindow({
    onClose
  }) {
    return h(RetroWindow, {
      title: "FOXGLOVE_MULTIVERSAL.APP",
      x0: Math.max(12, window.innerWidth - 560),
      y0: 80,
      w: Math.min(480, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        display: "flex",
        gap: 18,
        padding: 16
      }
    }, h(Flora, {
      w: 240,
      hpx: 330
    }), h("div", {
      style: {
        flex: 1,
        minWidth: 0,
        paddingTop: 8
      }
    }, h("div", {
      style: {
        fontSize: 10,
        letterSpacing: "0.22em",
        color: "#565b64",
        textTransform: "uppercase"
      }
    }, "FLORA_SERIES"), h("div", {
      style: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1.08,
        color: "#fff",
        margin: "10px 0 14px"
      }
    }, "Foxglove", h("br"), "Multiversal"), h(WISHLIST_URL ? "a" : "div", {
      href: WISHLIST_URL || undefined,
      target: WISHLIST_URL ? "_blank" : undefined,
      style: {
        display: "inline-block",
        background: "#c11722",
        color: "#fff",
        fontSize: 10,
        letterSpacing: "0.16em",
        padding: "6px 10px",
        marginBottom: 18,
        textDecoration: "none",
        cursor: WISHLIST_URL ? "pointer" : "default"
      }
    }, WISHLIST_URL ? "\u25cf WISHLIST" : "\u25cf IN DEVELOPMENT"), h("div", {
      style: {
        fontSize: 12,
        lineHeight: 2,
        color: "#6f7480"
      }
    }, h("div", null, "Clock in."), h("div", {
      style: {
        color: "#9a4a52"
      }
    }, "Roll back."), h("div", null, "Clock in again.")))));
  }
  function ReadmeWindow({
    onClose
  }) {
    return h(RetroWindow, {
      title: "readme.txt",
      x0: Math.max(12, Math.min(70, window.innerWidth - 372)),
      y0: Math.max(60, window.innerHeight - 360),
      w: Math.min(360, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        padding: "18px 20px 22px",
        fontSize: 12.5,
        lineHeight: 1.95,
        color: "#c6ced8"
      }
    }, h("div", null, "XGVE is a vibecoded games studio."), h("div", null, "We build our own worlds \u2014 and ship"), h("div", null, "client apps in days, not quarters."), h("div", {
      style: {
        marginTop: 22,
        color: "#565b64"
      }
    }, "// continuity note ................"), h("div", {
      style: {
        color: "#3f434c"
      }
    }, "you have been here before.")));
  }
  function ContactWindow({
    onClose
  }) {
    const [em, setEm] = React.useState("");
    const dim = {
      color: "#565b64"
    };
    const lnk = {
      color: "#c6ced8",
      textDecoration: "none",
      letterSpacing: "0.12em"
    };
    return h(RetroWindow, {
      title: "contact.txt",
      x0: Math.max(12, (window.innerWidth - 380) / 2),
      y0: 110,
      w: Math.min(380, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        padding: "18px 20px 22px",
        fontSize: 12.5,
        lineHeight: 2,
        color: "#c6ced8"
      }
    }, h("a", {
      href: "mailto:hello@xgve.io",
      style: {
        color: "#fff",
        textDecoration: "none",
        letterSpacing: "0.1em"
      }
    }, "hello@xgve.io"), h("div", {
      style: Object.assign({
        marginTop: 16
      }, dim)
    }, "// socials"), LINKS.map(function (l) {
      return h("div", {
        key: l[0]
      }, h("a", {
        href: l[1],
        target: "_blank",
        rel: "noopener",
        style: lnk
      }, l[0]));
    }), h("div", {
      style: Object.assign({
        marginTop: 16
      }, dim)
    }, "// mailing list"), h("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 6
      }
    }, h("input", {
      value: em,
      onChange: function (e) {
        setEm(e.target.value);
      },
      placeholder: "you@domain",
      style: {
        flex: 1,
        minWidth: 0,
        background: "#0b0b0e",
        border: "1px solid #33363d",
        color: "#e9eaec",
        fontFamily: MONO,
        fontSize: 12,
        padding: "7px 9px",
        outline: "none"
      }
    }), h("button", {
      onClick: function () {
        location.href = "mailto:hello@xgve.io?subject=Mailing%20list&body=" + encodeURIComponent("Subscribe: " + em);
      },
      style: {
        background: "transparent",
        border: "1px solid #83848c",
        color: "#e9eaec",
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: "0.14em",
        padding: "7px 10px",
        cursor: "pointer"
      }
    }, "[ SUBSCRIBE ]"))));
  }
  window.XGVE_FoxWindow = FoxgloveWindow;
  window.XGVE_ReadmeWindow = ReadmeWindow;
  window.XGVE_ContactWindow = ContactWindow;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-handoff/ascii-foxglove/source/xgve-windows.jsx", error: String((e && e.message) || e) }); }

// site/ascii-data.js
try { (() => {
window.XG_ASCII = {
  "emblem": {
    "cols": 82,
    "rows": 35,
    "chars": ["                                                                                  ", "                                ;:;~!|-ir|-|;:                                    ", "                           ,:xw0Q@gNMNB&BNB$g@#w?r'                               ", "                       .rt$8$#@W0Q@35P%e9F#QXg&Q$#X86i`                           ", "                     +o&WH#$gS+;'            ,ir%XB$8&MS:                ,i`      ", "                   |wg$W0#;.                      `~##&M&8x'          ,|>:   LE.  ", "   `.            -8N8@Q7.                            ,c@W0#&t       :>F+  :-:;:   ", "    `i?~;      .5W0B#:                                  +5Ng$w;  '<3#=    ,:;     ", "      '1M2i`  .0gX8+                                      =w1,:;FXS!   xQr        ", "        ;t&#oc!';L`                                         ,>XB@~  ,' ','        ", "           +g0WHjr'                                      ;i9MXgv:  +ga            ", "           ~`=EMN#0F?:                                 ~+gH#$t;    :`:            ", "          ~$Q! !FN#0#N8L|                           :v5X8@8t.                     ", "          oQH6   =3gNgNWHW>i,                    .-3NMXB$t,                       ", "         !Q$g+     ,?&W&#XgNM6?;              .-oNW&g0Mc.;:    ;~-|r|`            ", "         6NQ$'       .<93P55#e2#&?;         ,>H8080Q@t;|#=     E&M@B$M            ", "         $W&S     .rc+t>7tj?L1<wMNQ0%95wwwo2QXBHB&BF=+#&c      ,i-6X#N'           ", "         #XMF       !6aFPPFo59o20BHMc+j1t*@QX#XM$9!.?P-'          58HQ;           ", "         XM@e          !=r|;:-1$#@>;      .tBX#a|`'r:             5$B&.           ", "         SN8@.         '+jt+v*c??:          ;i;:                  HWHa            ", "         +QNM*                                                   !W@B>            ", "          #W0M,               `60j,        .x81:                 w&W&.            ", "          ~XMNa`            :xQ&#$#L.    ;+&8N#H?,              >$MN<             ", "           :@M&o          ,<$W@#&g0#@1 '7#HBX#Ng$QL:           =$QNo              ", "            >Ng$o`      .?Q$#$7, +F&#@MN#&#F. :LBXQH+;        i$#HS`              ", "             ~XB@8!    <N8N#!.     =38HgX6-     ;~2g@Q!:     *X8@S;               ", "              .9M@~  +gXg5|          !%e|          +5HgX:   wXQ$c                 ", "                !: ~5W@j`                            .>WX#+ `##~                  ", "                 rB$or `=                            `. |P#Ni                     ", "               |2W*' :%WXg?|`                     ;t$8XL` ;?&2-                   ", "             ;F#:     ~6W0W@g5t-~;          ';=>P0QNQHE*.    !9E=                 ", "           :+7;         ,:wQ&WHMNB@Q0P2%3QXgHWXgHB&w-.         :*>`               ", "         ,:;                '!xag@W$Q@W@gXW&#&2x:`                .`:             ", "                                  `'+=r:r~;'                                      ", "                                                                                  "],
    "colors": ["..................................................................................", "................................wwwwwwwwwwwwww....................................", "...........................wwwwwwwwwwwwwwwwwwwwwwww...............................", ".......................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........................", ".....................wwwwwwwwwwww............wwwwwwwwwwww................rrr......", "...................wwwwwwwww......................wwwwwwwwww..........rrrr...rrr..", "...ww............wwwwwwww............................wwwwwwww.......rrrr..rrrrr...", "....wwwww......wwwwwww..................................wwwwwww..rrrrr....rrr.....", "......wwwwww..wwwwww......................................wwwwrrrrrr...rrr........", "........wwwwwwwwwww.........................................rrrrrr..rr.rrr........", "...........wwwwwwww......................................rrrrrrrr..rrr............", "...........wwwwwwwwwww.................................rrrrrrrr....rrr............", "..........wwww.wwwwwwwwww...........................rrrrrrrrr.....................", "..........wwww...wwwwwwwwwwww....................rrrrrrrrrr.......................", ".........wwwww.....wwwwwwwwwwwww..............rrrrrrrrrrrrr....wwwwwww............", ".........wwwww.......wwwwwwwwwwwwww.........rrrrrrrrrrrrrr.....wwwwwww............", ".........wwww.....wwwwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrrr......wwwwwwww...........", ".........wwww.......wwwwwwwwwwwwwwwwwwwrrrrrrrrrrrrrrrrr..........wwwww...........", ".........wwww..........wwwwwwwwwwwww......rrrrrrrrrrr.............wwwww...........", ".........wwwww.........wwwwwwwwwww..........rrrr..................wwww............", ".........wwwww...................................................wwwww............", "..........wwwww...............wwwww........wwwww.................wwwww............", "..........wwwwww............wwwwwwwww....wwwwwwwww..............wwwww.............", "...........wwwww..........wwwwwwwwwwww.wwwwwwwwwwwww...........wwwww..............", "............wwwwww......wwwwwwww.wwwwwwwwwwww.wwwwwwww........wwwwww..............", ".............wwwwww....wwwwwww.....wwwwwwww.....wwwwwwww.....wwwwww...............", "..............wwwww..wwwwww..........wwww..........wwwwww...wwwww.................", "................ww.wwwwww............................wwwwww.wwww..................", ".................wwwww.ww............................ww.wwwww.....................", "...............wwwww.wwwwwwww.....................wwwwwww.wwwww...................", ".............wwww.....wwwwwwwwwwww..........wwwwwwwwwwwww....wwww.................", "...........wwww.........wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........wwww...............", ".........www................wwwwwwwwwwwwwwwwwwwwww................www.............", "..................................wwwwwwwwww......................................", ".................................................................................."]
  },
  "wordmark": {
    "cols": 120,
    "rows": 14,
    "chars": ["                                                                                                                        ", "  ,=w%Sa3ax:             :cxxj<><i;   `>waea9P3SP2SS5Ewe#a#aeo++>?cL!                  :t?<+L|    !S2PPSa556#5ow%w5%t.  ", "    'xBXMX#$x`         ;>&W0#Xwc:   'SB&BNB$g@#@B0BXQXM0gHg&5; ;20B$ML                |&BXB$*   =##&8@M@#NMHgH#$M$ML'   ", "      ;>$W@M@Q6:     'FW&g$8w=    ;3$WNM$L7tc?Lj1t<7<*v<>v*=    `%$#NW6.             =XW&W@~   |t?LLv7+<tt>v*ct*Lj`     ", "         ra0W@Q@1  ;5$W&WH+,      :HW0Wv                          <08XgE.           ?XBN8P:                             ", "           'cM3: ~HWNg$Wt.        -8HMN.                           vXMHM0:        ;#NQX8a.                              ", "               vW$8N8@<,          =&M&8,        +NM&WXB@W0#&Q0QL    :NM@B@=      ,9XQNM+    #0MNBNgHWX#&#H8@#w'         ", "             :0W@W0B!'+.          ;g$BN.       :%#&BHM0W@WNg$Q&6     .EQ&80+    ;6HgXW!     $#@MHBNM@W@B@B&M-           ", "          .jQXB0gEi;?NM&o`        :Hg@8;         ,|r~+=-i+=wgXg2      'aQN80L  !8H#$6,      B@#@L+:-=;i+i+i             ", "        ;t&#HBX3;  .>#&#$BE:      -g&M@:                   %$WX3        >W$QX%v8@#$%,       @BHg+                       ", "      '?BHg$gF|      ;tH80Q0P!    =0g@8$i,'`.,.`.,.`.;.,.;<NMXgw         rW&gX80Q0#`        8$Q$8a=`';.,'`.,.,.;:       ", "    ,10QN#@9!          .*W$#@Qe=   :XM@W$g@W&Q@8@W0Q&#HW$gH#$Wj:          +#XB&Q$x          ;*&MXQ@W&MHM$BHQ&QHQNM+     ", "  'j#@gHWE.              ;+$#NBX8r   !#0BX8@g0Q@BHB0MNMX8@8@2,             ,#0B&1             .tB&g0WH#$QNW0BNQ&Q&8N:   ", "  ;:,'`.;                   ,'`:;.     ',.`.`';',.`'`'`:;:,'                ;.`.                 ';',.,';:,';:`';:;:,   "],
    "colors": ["........................................................................................................................", "..wwwwwwwwww.............wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwwrrrrrr..................rrrrrrr....wwwwwwwwwwwwwwwwwwww..", "....wwwwwwwwww.........wrrrrrrrrw...wwwwwwwwwwwwwwwwwwwwwwwwww.wrrrrrr................rrrrrrr...wwwwwwwwwwwwwwwwwwwww...", "......wwwwwwwwww.....wwwwrrrrr....wwwwwwwwwwwwwwwwwwwwwwwwww....wrrrrrrw.............rrrrrrr...wwwwwwwwwwwwwwwwwwww.....", ".........wwwwwwww..wwwwwwwww......wwwwww..........................rrrrrrw...........rrrrrrw.............................", "...........wwwww.wwwwwwwww........wwwwww...........................rrrrrrr........wrrrrrrw..............................", "...............wwwwwwwww..........wwwwww........wwwwwwwwwwwwwwww....rrrrrrr......wrrrrrr....wwwwwwwwwwwwwwwwwww.........", ".............wwwwwwwwwww..........wwwwww.......wwwwwwwwwwwwwwwww.....wrrrrrr....rrrrrrr.....wwwwwwwwwwwwwwwww...........", "..........wwwwwwwwwwwwwwww........wwwwww.........wwwwwwwwwwwwwww......wrrrrrr..rrrrrrr......wwwwwwwwwwwwwww.............", "........wwwwwwwww..wwwwwwwww......wwwwww...................wwwww........rrrrrrrrrrrrw.......wwwww.......................", "......wwwwwwwww......wwwwwwwww....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........rrrrrrrrrrw........wwwwwwwwwwwwwwwwwwwww.......", "....wwwwwwwww..........wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwwwwwww..........rrrrrrrr..........wwwwwwwwwwwwwwwwwwwwwww.....", "..wwwwwwwww..............wwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwwww.............rrrrrr.............wwwwwwwwwwwwwwwwwwwwwww...", "..wwwwwww...................wwwwww.....wwwwwwwwwwwwwwwwwwwww................wwww.................wwwwwwwwwwwwwwwwwwww..."]
  },
  "foxglove": {
    "cols": 74,
    "rows": 67,
    "chars": ["                                                                          ", "                                                          `|,             ", "                                                  ';'r   ;tF<             ", "                                                 t<76g`.r#$?j             ", "                                           ;~!:  -3S8&t*#w*,.;            ", "                                           |X56:,:19#+**j+xae|            ", "                                           ,6&2@6-=&PSa@W0#t:     .`      ", "                                           .cQ@Mvxow-i<j1v!:;             ", "                                     `'ri+=`.`i%a@gto<wEM$gw1v:           ", "                                  -+#268E#2aN+-cP~`~&cv%HWNQ$W?           ", "                              '!=,:+x38ae%E0+58XM-.`gE8evve9~,            ", "                           .rQ08&%oPxx7WEP@F13<~+6+t,EH9;:          `     ", "                         +#$#NBo85%Ea3',to9jL;',F27w5;:;                  ", "                         '>QHw#5HF&tr' '<t+o71!'+Fj3632i                  ", "                   ,       `>N8&L??x*?<a#wPFw56-~EW&g0ac                  ", "                         :r7c7tt+|;>7aXeFwEFeEFw+=3w-'                    ", "                     ;|>#@Q966E<ea|+<9=r17#N2SBHBL.                       ", "                    3BaBPPFo>9L20=;>5:;1t*cQX#5E2'                        ", "              '    `LF%HFF%2?eBF*x>aM@o>96FHLxj;:                         ", "                -i;'`i;'PWt#&*c.?~w6-i5QeWFx@t2M+                         ", "        .`     *6&g$Sa5N*>6>~7g,|e:+x-*?x57!|Hg3~                         ", "               c<WXgwS9#@1+Fo3j><j+i+?evF3$Bw|;          ',               ", "               `7X#&855o:+i;|xw1?<~!:26P5HB&8N<;                          ", "                ;=;7tjee27%<#W22#*j<rS$3NEHBX#Ngoi`              '        ", "              .!jH80FF7Po?:6#$8X6<xv:;256&#NB3SoBX5                       ", "            `~oB@%3S6v<o+:w8PW&M#<1w!',gX8+|!c*#$7`      :                ", "  :      ,*#6@WHMPSo1vLXj5M&8H80P>eL  :H#aMEaw8@gr                        ", "         .eB&gH8$#ES595BHg7.;|!vSg5=,~;~r=PM0Qai,  '`=              ;.    ", "          :3w>ioBN<LgNi`wXw>+r.x|>g;:,'r1*?wP6xr' '  r.                   ", " '        !Q&Q3v>WH#v:,.+*$WXQ08@M$>+:#E>a9QN#0gX2%S$8v.                  ", " ;     `. .;P@F#*w2r|+c-|>7%g0#E'j.-?>c%FP2XB$g080Q6<2B`   `',            ", "    ,'cw7:+i-2ao%6S1+:t:7:; +oP:;'c11P2%3PXgHWP|`.;=EML.`~S#52!           ", "  'xg&a3#@WHM@WwSj>;=-~jv,.,ijxti .LF7*Lo95&#+.,.`:rw&=!>w2cW&o           ", "  ,iH8%c-=w8HWH5FSjtx*1a;~E+*?<<#j`'cQH#5SHM`:;'`|?j@#@?o5SwNe,        '  ", "   ;'*a#x?:;W@8H#5#v6#+;xjoS7SF+*E7`|*:1#XW;:ri;<*72Q&F7EE5&W-            ", "     |##7j,.,7@8*?P5ai;iSaoWPM$o?Lo:,~L~`W<~vc1>x*XMvjj16w0%0|,           ", "     !8NEx?j.,PXe@QL:;|!M6WNM0Q&3o7<.L21i+80#og$6$81vEo?P#QXB%L,:`'       ", "     .,BHa3E+~rW@>ri+i,i$2NB@B@8$9aL;i<e!i-:;'LeejcL*%E#XBXEr~P63#v       ", "     +B0M$W02XW3|-j!|!+`8eB$B@Q@aHB&=;:tt;|-:; ,:ct+<+#%B&?`ixc9M-:       ", "     .+j;'-6ES+t#9ccv>6:NWXx!:`'+i+e06,=!t*tE+c|!'<9SaP#$~,=teES0B`       ", "         ;:!WN35oEFxj5o2Qj=;~-ircrj7o$:;<cv?Excv?;i,>$20=rv65&Q@B,        ", "  ,     ;g$WwgN8Hw+vw3+gNW@3?PaS@#@#&';t-1cg$ME9F6#~;6$262XQN+,:          ", "         `>PL!:-#H#%#- `xE3e3HgX87*+:`xt?7w0QN#082#9.,?3x,:+i           : ", "       'x#FQ#ar|`=Nw+ ;'!'`.;|xo*:  `:x+E3w8HW@gNQ02#:,:?7w9`           ; ", "      .&MXM@8@%6B5LH7`+t?-~;  .?#+ ,'twwcSE&#NgHM$MN#57-7E*+<j'           ", "       =;:,.o#0L5W0jcL7%L~?Lr `~e*`  :Eeae5M&M0Q0358SW&35~,22?            ", "                 ,.L6wP#*LjeP` `<5i   =@5PM$M?|;.,.+<7M$:!~3a6>           ", "                 =0MoFEBa<vaH8,:;%t:   =ag$x,.;.,';*2Q*'-+x+XgN           ", "    '            `tNB6aeQHPo>!  =5?v   ;WHi+ir+++x1egHtr*wWX5r:           ", "                   x0W3EXWNj`   -21<  ,=NaceS6vv+t@g$vwQNgP'              ", "          :         .!**.;       59v:-+v>#80LXMe#XB;: .+*r          :;    ", "          `      '`            = 7e>;+c:     '>aF:;                       ", "                               ` !3x77.                ;:       :         ", "             :vctij:`. i         |P6?.        ,ij1<1x7xj1                 ", "              |*ee6ta5jP:;       -9#+      ,x*t71+:jv@6-:                 ", "                ,1$<7|;c263i,    :w7- `: '!ov|;i;<c5H>,    ';             ", "                 `+aw7c+i+xL7;   ;xvL :`.r<+|!j?7%#Fj                     ", "                   |e#E9<~;|!cc  'tct:,.-~;:x>>#0#x'                      ", "                    .+x@#Lt-:;~* ;7v?  ;=!9EQ5Lr=                         ", "                        rcwS1Fcir jjx',~P3!:                              ", "                  :,        .;#0?;ixj,ta'              ;'                 ", "                               'F9r7>j*.                                  ", "                                'HxL=v'                                   ", "                             .   |##-=      +                             ", "                             !   ,a5xr:                                   ", "                       '         .9v1.`                                   ", "                                  w+t!                                    "],
    "colors": ["..........................................................................", "..........................................................www.............", "..................................................wwww...wwww.............", ".................................................wwwwwwwwwwww.............", "...........................................wwww..wwwwwwwwwwwww............", "...........................................wwwwwwwwwwwwwwwwwww............", "...........................................wwwwwwwwwwwwwwwwww.....ww......", "...........................................wwwwwwwwwwwwwwwwww.............", ".....................................wwwwwwwwwwwwwwwwwwwwwwwwww...........", "..................................wwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..............................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww............", "...........................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........w.....", ".........................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".........................wwwwwwwwwwwww.wwwwwwwwwwwwwwwww..................", "...................w.......wwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".........................wwwwwwwwwwwwwwwwwwwwwwwwwwwww....................", ".....................wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......................", "....................wwwwwwwwwwwwwwwwwwwwwwwwwwwwww........................", "..............w....wwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "........ww.....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.........................", "...............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........ww...............", "...............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........................", "................wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..............w........", "..............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......................", "............wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww......w................", "..w......wwwwwwwwwwwwwwwwwwwwwwwwwww..wwwwwwwwwwww........................", ".........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..www..............ww....", "..........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.w..ww...................", ".w........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..................", ".w.....ww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...www............", "....wwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", "..wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww........w..", "...wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww............", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwww.......", ".....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww.......", ".........wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww........", "..w.....wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww..........", ".........wwwwwwwwwwwww.wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww...........w.", ".......wwwwwwwwwwwwww.wwwwwwwwwwww..wwwwwwwwwwwwwwwwwwwwwwwww...........w.", "......wwwwwwwwwwwwwwwwwwwwww..wwww.wwwwwwwwwwwwwwwwwwwwwwwwwwww...........", ".......wwwwwwwwwwwwwwwwwwwwww.wwwww..wwwwwwwwwwwwwwwwwwwwwwwww............", ".................wwwwwwwwwwwww.wwww...wwwwwwwwwwwwwwwwwwwwwwwww...........", ".................wwwwwwwwwwwwwwwwwww...wwwwwwwwwwwwwwwwwwwwwwww...........", "....w............wwwwwwwwwwwww..wwww...wwwwwwwwwwwwwwwwwwwwwwww...........", "...................wwwwwwwwww...wwww..wwwwwwwwwwwwwwwwwwwwww..............", "..........w.........wwwwww.......wwwwwwwwwwwwwwwwwwww.wwww..........ww....", "..........w......ww............w.wwwwwww.....wwwwww.......................", "...............................w.wwwwww................ww.......w.........", ".............wwwwwwwww.w.........wwwww........wwwwwwwwwww.................", "..............wwwwwwwwwwww.......wwww......wwwwwwwwwwwwww.................", "................wwwwwwwwwwwww....wwww.ww.wwwwwwwwwwwwww....ww.............", ".................wwwwwwwwwwwww...wwww.wwwwwwwwwwwwwww.....................", "...................wwwwwwwwwwww..wwwwwwwwwwwwwwwwwww......................", "....................wwwwwwwwwwww.wwww..wwwwwwwwww.........................", "........................wwwwwwwww.wwwwwwwwww..............................", "..................ww........wwwwwwwwwwwww..............ww.................", "...............................wwwwwwwww..................................", "................................wwwwwww...................................", ".............................w...wwwww......w.............................", ".............................w...wwwwww...................................", ".......................w.........wwwwww...................................", "..................................wwww...................................."]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/ascii-data.js", error: String((e && e.message) || e) }); }

// site/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// site/xgve-ascii-emblem.js
try { (() => {
/* XGVE Studios — half-ASCII emblem (LEFT half) from the XG_ASCII.emblem grid.
 * The grid defines WHICH cells are lit (the emblem shape) + red cells; the glyph
 * shown in each is drawn from a large varied set and shimmers quickly, so the mark
 * reads as living code. Right half stays empty for the metallic emblem beneath.
 */
(function () {
  var CHARS = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>/\\|!?".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  window.XGVE_initAsciiEmblem = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1,
      grid = null,
      lit = [],
      fs = 10,
      t0 = 0;
    function size() {
      var host = canvas.parentElement || canvas;
      W = canvas.clientWidth || host.clientWidth;
      H = canvas.clientHeight || host.clientHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function build() {
      lit = [];
      if (!grid || !W) return;
      var C = grid.cols,
        R = grid.rows,
        chars = grid.chars,
        cols = grid.colors;
      var cw = W / C,
        ch = H / R,
        half = W * 0.5;
      fs = ch;
      for (var y = 0; y < R; y++) {
        var cr = chars[y] || "",
          kr = cols[y] || "";
        for (var x = 0; x < C; x++) {
          var px = x * cw + cw / 2;
          if (px >= half) break;
          var c = cr[x];
          if (c === " " || c === undefined) continue;
          var di = DENS.indexOf(c);
          lit.push({
            x: px,
            y: y * ch + ch / 2,
            red: kr[x] === "r",
            d: di < 0 ? 0.5 : di / (DENS.length - 1)
          });
        }
      }
      var mx = W * 0.5,
        my = H * 0.5,
        md = Math.hypot(mx, my) || 1;
      for (var k = 0; k < lit.length; k++) lit[k].o = Math.hypot(lit[k].x - mx, lit[k].y - my) / md;
    }
    function render() {
      if (!grid) return;
      ctx.clearRect(0, 0, W, H);
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "600 " + (fs * 0.98).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = performance.now() * 0.014 | 0,
        n = CHARS.length;
      var ts = performance.now() * 0.001;
      var rf = 1;
      if (!reduced && t0) {
        var el = (performance.now() - t0) / 2100;
        rf = el >= 1 ? 1 : el * el * (3 - 2 * el);
      }
      for (var i = 0; i < lit.length; i++) {
        var c = lit[i];
        if (c.o > rf) continue;
        var wv = Math.sin(c.x * 0.02 + ts * 1.3) + Math.sin(c.y * 0.024 - ts);
        var ph = (ts * 0.35 + c.x * 0.012 + c.y * 0.006) % 1; // flow toward the junction
        var pa = ph > 0.72 ? 1 - (ph - 0.72) / 0.28 : ph < 0.08 ? ph / 0.08 : 1;
        var lite = 0.85 + 0.35 * (c.d - 0.5) * Math.sin(ts * 0.5 + 0.6); // pseudo-depth rolling light
        ctx.globalAlpha = Math.min(1, (0.78 + 0.2 * (wv * 0.25 + 0.5)) * (0.35 + 0.65 * pa) * lite);
        ctx.fillStyle = c.red ? "rgba(255,42,56,.95)" : "rgba(233,234,236,.96)";
        ctx.fillText(CHARS[(i * 17 + salt) % n], c.x + ph * 9 + (c.d - 0.5) * 22 * Math.sin(ts * 0.5), c.y + wv * 2.2);
      }
      // rogue red glyphs breaking free of the mark (drift left, fade)
      if (lit.length > 10) {
        for (var r2 = 0; r2 < 2; r2++) {
          var rp = (ts * 0.12 + r2 * 0.5) % 1;
          var src = lit[(r2 * 137 + 29) % lit.length];
          ctx.globalAlpha = rp < 0.1 ? rp / 0.1 * 0.9 : (1 - rp) * 0.9;
          ctx.fillStyle = "rgba(255,42,56,.9)";
          ctx.fillText(CHARS[(r2 * 31 + salt) % n], src.x - rp * 80, src.y - rp * 26);
        }
      }
      ctx.globalAlpha = 1;
    }
    var raf = 0,
      prev = 0;
    function loop(now) {
      if (now - prev > 70) {
        prev = now;
        render();
      }
      raf = requestAnimationFrame(loop);
    }
    var tries = 0;
    function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.emblem)) {
        if (tries++ < 60) setTimeout(start, 80);
        return;
      }
      grid = window.XG_ASCII.emblem;
      size();
      build();
      t0 = performance.now();
      render();
      window.addEventListener("resize", function () {
        size();
        build();
        render();
      });
      if (!reduced) raf = requestAnimationFrame(loop);
    }
    start();
    return function () {
      cancelAnimationFrame(raf);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-ascii-emblem.js", error: String((e && e.message) || e) }); }

// site/xgve-asciifield.js
try { (() => {
/* XGVE Studios — screen-wide geometric ASCII field (full-bleed, always moving).
 * Known-good 2D engine: glyph sprite ATLAS blitted with drawImage (smooth, no
 * stutter). Two independently rotating kaleidoscopic folds feed several overlapping
 * geometric modes whose weights morph over time. Large varied glyph set; white/gray
 * with scarce red on the peaks. window.XGVE_initAsciiField(canvas).
 * (The 3D wave-sheet variant is parked — see todo 45 — this reliably fills the view.)
 */
(function () {
  var CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#@%&$*+=-<>/\\|!?:;.^~coxsevz".split("");
  window.XGVE_initAsciiField = function (canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var CELL = opts.cell || 30;
    var W = 0,
      H = 0,
      cols = 0,
      rows = 0,
      dpr = 1,
      aspect = 1;
    var atlasW = null,
      atlasR = null,
      tile = 0,
      N = CHARS.length;
    function makeAtlas(col) {
      var a = document.createElement("canvas");
      a.width = tile * N;
      a.height = tile;
      var x = a.getContext("2d");
      x.textBaseline = "middle";
      x.textAlign = "center";
      x.font = "600 " + Math.floor((CELL - 6) * dpr) + "px 'IBM Plex Mono', monospace";
      x.fillStyle = col;
      for (var i = 0; i < N; i++) x.fillText(CHARS[i], i * tile + tile / 2, tile / 2);
      return a;
    }
    function resize() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth;
      H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / CELL);
      rows = Math.ceil(H / CELL);
      aspect = W / H;
      tile = Math.ceil(CELL * dpr);
      atlasW = makeAtlas("#c6ced8");
      atlasR = makeAtlas("#e6202e");
    }
    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(resize);
    setTimeout(resize, 140);
    if (window.ResizeObserver) {
      try {
        new ResizeObserver(resize).observe(canvas.parentElement || document.body);
      } catch (e) {}
    }
    var raf = 0,
      prev = 0,
      tt = 0,
      lastPaint = 0;
    function draw(now) {
      if (document.hidden) {
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      }
      if (window.XGVE_PAUSED) {
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      } // frozen frame stays on canvas
      if (now - lastPaint < 30) {
        raf = requestAnimationFrame(draw);
        return;
      } // ~30fps paint cap
      lastPaint = now;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016;
      prev = now;
      tt += reduced ? 0 : dt * 2.3;
      var T = tt;
      var ra = T * 0.07,
        ca = Math.cos(ra),
        sa = Math.sin(ra);
      var rb = -T * 0.05 + 1.3,
        cb = Math.cos(rb),
        sb = Math.sin(rb);
      var w1 = 0.55 + 0.45 * Math.sin(T * 0.17),
        w2 = 0.55 + 0.45 * Math.sin(T * 0.13 + 2),
        w3 = 0.55 + 0.45 * Math.sin(T * 0.10 + 4),
        w4 = 0.5 + 0.5 * Math.sin(T * 0.08 + 1),
        w5 = 0.5 + 0.5 * Math.sin(T * 0.15 + 3),
        w6 = 0.5 + 0.5 * Math.sin(T * 0.07 + 5),
        w7 = 0.5 + 0.5 * Math.sin(T * 0.12 + 2.5);
      ctx.clearRect(0, 0, W, H);
      var cxp = W / 2,
        cyp = H / 2,
        salt = T * 7 | 0,
        half = CELL / 2;
      for (var j = 0; j < rows; j++) {
        var py = j * CELL + half,
          ny = (py - cyp) / cyp;
        for (var i = 0; i < cols; i++) {
          var px = i * CELL + half,
            nx = (px - cxp) / cxp * aspect;
          var rx = nx * ca - ny * sa,
            ry = nx * sa + ny * ca;
          var u = Math.abs(rx),
            v = Math.abs(ry);
          var r = Math.sqrt(u * u + v * v),
            ang = Math.atan2(v, u + 1e-4);
          var bx = nx * cb - ny * sb,
            by = nx * sb + ny * cb;
          var r2 = Math.sqrt(bx * bx + by * by);
          var s = w1 * Math.sin(r * 8 - T * 1.3) + w2 * Math.sin(ang * 6 + r * 4.5 - T * 0.9) + w3 * Math.sin(u * 20 + v * 20 - T * 1.6) + w4 * Math.sin((u - v) * 26 + T * 1.8) + w5 * Math.sin(r2 * 11 - T * 1.1) + w6 * Math.sin(Math.max(u, v) * 16 - T * 1.2) + w7 * Math.sin((u * 2 + v) * 13 + T * 0.7);
          var val = 0.5 + s * 0.19;
          if (val < 0.30) continue;
          var zN = s * 0.45; // parametric 3D depth
          var scale = 1 + zN * 0.35;
          if (scale < 0.55) scale = 0.55;
          var dx = px + (px - cxp) / cxp * zN * 16; // radial parallax
          var dy = py - zN * CELL * 0.9; // relief lift
          var sz = CELL * scale,
            hs = sz / 2;
          var hash = i * 131 + j * 57 & 255;
          var idx = (hash + salt) % N;
          var depthB = 0.55 + 0.45 * Math.max(0, Math.min(1, zN * 0.45 + 0.5));
          var msk = window.XGVE_RMASK;
          var brk = msk && msk.has((px / 24 | 0) * 4096 + (py / 24 | 0)) ? 0.14 : 1;
          ctx.globalAlpha = (0.12 + Math.min(0.62, (val - 0.30) * 0.8)) * depthB * brk;
          var red = val > 0.88 || (hash & 7) === 0 && val > 0.66;
          ctx.drawImage(red ? atlasR : atlasW, idx * tile, 0, tile, tile, dx - hs, dy - hs, sz, sz);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    if (reduced) {
      cancelAnimationFrame(raf);
      draw(0);
    }
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-asciifield.js", error: String((e && e.message) || e) }); }

// site/xgve-firestream.js
try { (() => {
/* XGVE Studios — ASCII glyph stream pouring off the emblem's left edge.
 * Row-aligned monospace glyphs stream left like dissolving code: dense & hot
 * (red/orange) near the emblem, cooling through white to steel-blue as they go.
 * window.XGVE_initFireStream(canvas, getOrigin) — getOrigin()->{x,y,h}.
 */
(function () {
  var GLYPHS = "01101#@%&$X=+*:.7?01001".split("");
  var rnd = function () {
    return GLYPHS[Math.random() * GLYPHS.length | 0];
  };
  window.XGVE_initFireStream = function (canvas, getOrigin) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1;
    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);
    var ROW = 13; // row pitch → ascii scanline feel
    var parts = [],
      MAX = 460;
    function spawn(ox, oy, eh) {
      var row = Math.round((oy + (Math.random() - 0.5) * eh) / ROW) * ROW;
      parts.push({
        x: ox + Math.random() * 6,
        y: row,
        vx: -(60 + Math.random() * 150),
        vy: (Math.random() - 0.5) * 7,
        life: 0,
        ttl: 1.6 + Math.random() * 2.4,
        ch: rnd(),
        sz: 10 + Math.random() * 3,
        rechar: 0
      });
      if (parts.length > MAX) parts.shift();
    }
    function color(temp, a) {
      var r, g, b;
      if (temp > 0.62) {
        r = 255;
        g = 55 + (1 - temp) * 210;
        b = 45;
      } // ember red→orange
      else if (temp > 0.34) {
        r = 240;
        g = 242;
        b = 235;
      } // white-hot
      else {
        r = 110;
        g = 170;
        b = 255;
      } // cool steel-blue
      return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a.toFixed(3) + ")";
    }
    var raf = 0,
      prev = 0;
    function frame(t) {
      var dt = prev ? Math.min(0.05, (t - prev) / 1000) : 0.016;
      prev = t;
      ctx.clearRect(0, 0, W, H);
      var o = getOrigin && getOrigin();
      if (o && !reduced) {
        var n = 4 + (Math.random() * 4 | 0);
        for (var i = 0; i < n; i++) spawn(o.x, o.y, o.h || 140);
      }
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (var j = parts.length - 1; j >= 0; j--) {
        var p = parts[j];
        p.life += dt;
        var f = p.life / p.ttl;
        if (f >= 1) {
          parts.splice(j, 1);
          continue;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rechar += dt;
        if (p.rechar > 0.12) {
          p.rechar = 0;
          if (Math.random() < 0.5) p.ch = rnd();
        }
        var temp = 1 - f;
        var a = (f < 0.1 ? f / 0.1 : f > 0.62 ? (1 - f) / 0.38 : 1) * 0.92;
        ctx.font = "500 " + p.sz.toFixed(1) + "px 'IBM Plex Mono', monospace";
        ctx.fillStyle = color(temp, a);
        ctx.fillText(p.ch, p.x, p.y);
      }
      raf = requestAnimationFrame(frame);
    }
    if (!reduced) raf = requestAnimationFrame(frame);
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-firestream.js", error: String((e && e.message) || e) }); }

// site/xgve-foxglove-ghost.js
try { (() => {
/* XGVE Studios — dual alternating ASCII reveal, white, layered over the field.
 * A: the REAL Foxglove trademark art (XG_ASCII.foxglove) FAR RIGHT — builds up
 *    bottom-first, holds, disintegrates, morphing out of the background field.
 * B: big XGVE wordmark (XG_ASCII.wordmark) BOTTOM-LEFT — builds left→right.
 * Alternate (never together). NOTE: this uses the brand's own 2D ASCII art — a
 * faithful trademark. A true parametric 3D foxglove would need a 3D model/depth
 * source of the mark (can't be fabricated from the flat art).
 * window.XGVE_initFoxgloveGhost(canvas).
 */
(function () {
  var NOISE = "01#@%&$X=+*<>/\\|".split("");
  var SHIM = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>?!".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  function smooth(t) {
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return t * t * (3 - 2 * t);
  }
  window.XGVE_initFoxgloveGhost = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0,
      H = 0,
      dpr = 1;
    function size() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth;
      H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    var foxCells = null,
      wordCells = null;
    function prepGrid(key, ord) {
      var g = window.XG_ASCII && window.XG_ASCII[key];
      if (!g) return null;
      var C = g.cols,
        R = g.rows,
        chars = g.chars,
        cols = g.colors || [],
        cells = [];
      for (var y = 0; y < R; y++) {
        var row = chars[y] || "",
          kr = cols[y] || "";
        for (var x = 0; x < C; x++) {
          var c = row[x];
          if (c === " " || c === undefined) continue;
          var di = DENS.indexOf(c);
          cells.push({
            x: x,
            y: y,
            ch: c,
            red: kr[x] === "r",
            o: ord(x, y, C, R),
            d: di < 0 ? 0.5 : di / (DENS.length - 1)
          });
        }
      }
      return {
        C: C,
        R: R,
        cells: cells
      };
    }
    function prep() {
      foxCells = prepGrid("foxglove", function (x, y, C, R) {
        return 1 - y / R;
      }); // bottom-first
      wordCells = prepGrid("wordmark", function (x, y, C, R) {
        return x / C;
      }); // left→right
    }
    var T = [{
      Tb: 4.2,
      Th: 2.6,
      Td: 3.0,
      Tg: 1.1
    }, {
      Tb: 3.0,
      Th: 1.8,
      Td: 2.2,
      Tg: 1.1
    }];
    var raf = 0,
      prev = 0,
      tt = 0,
      idx = 0,
      subStart = 0,
      lastPaint = 0,
      pClear = false;
    function phaseRF(e, d) {
      if (reduced) return 1;
      if (e < d.Tb) return smooth(e / d.Tb);
      if (e < d.Tb + d.Th) return 1;
      if (e < d.Tb + d.Th + d.Td) return 1 - smooth((e - d.Tb - d.Th) / d.Td);
      return -1;
    }
    function drawGrid(g, rf, cx, hFrac, wFrac, place, exact) {
      if (!g) return;
      var C = g.C,
        R = g.R,
        ch = H * hFrac / R,
        cw = ch * 0.6;
      if (cw * C > W * wFrac) {
        cw = W * wFrac / C;
        ch = cw / 0.6;
      }
      var blockW = cw * C,
        blockH = ch * R;
      var ox = place === "bl" ? W * 0.04 : cx * W - blockW / 2;
      var oy = place === "bl" ? H * 0.9 - blockH : (H - blockH) / 2;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "500 " + (ch * 0.95).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = performance.now() * 0.012 | 0;
      var ts = performance.now() * 0.001;
      var mask = new Set();
      for (var i = 0; i < g.cells.length; i++) {
        var cell = g.cells[i],
          reveal = rf - cell.o;
        if (reveal <= 0) continue;
        var glyph;
        if (reveal < 0.06) glyph = NOISE[Math.random() * NOISE.length | 0];else if (exact) glyph = Math.random() < 0.015 ? NOISE[Math.random() * NOISE.length | 0] : cell.ch;else glyph = SHIM[(cell.x * 17 + cell.y * 29 + salt) % SHIM.length];
        var px = ox + cell.x * cw + cw / 2,
          py = oy + cell.y * ch + ch / 2;
        var sway = Math.sin(ts * 0.55);
        px += (cell.d - 0.5) * 30 * sway; // pseudo-depth parallax (both subjects)
        var lite = 0.85 + 0.35 * (cell.d - 0.5) * Math.sin(ts * 0.55 + 0.6);
        mask.add((px / 24 | 0) * 4096 + (py / 24 | 0));
        var wv = Math.sin(px * 0.011 + ts * 1.2) + Math.sin(py * 0.013 - ts * 0.9);
        ctx.globalAlpha = Math.min(1, smooth(reveal / 0.22) * (0.52 + 0.24 * (wv * 0.25 + 0.5)) * lite);
        var isRed = cell.red || exact && (cell.x * 7 + cell.y * 13) % 11 === 0;
        ctx.fillStyle = isRed ? "rgba(230,32,46,0.95)" : "rgba(198,204,214,0.95)";
        ctx.fillText(glyph, px, py + wv * 2.4);
      }
      window.XGVE_RMASK = mask;
    }
    function draw(now) {
      if (window.XGVE_PAUSED) {
        if (!pClear) {
          ctx.clearRect(0, 0, W, H);
          window.XGVE_RMASK = null;
          pClear = true;
        }
        prev = now;
        raf = requestAnimationFrame(draw);
        return;
      }
      pClear = false;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016;
      prev = now;
      tt += reduced ? 0 : dt;
      if (now - lastPaint < 33) {
        raf = requestAnimationFrame(draw);
        return;
      } // ~30fps paint, timeline stays true
      lastPaint = now;
      ctx.clearRect(0, 0, W, H);
      var cur = reduced ? 0 : idx,
        d = T[cur],
        e = tt - subStart;
      if (!reduced && e >= d.Tb + d.Th + d.Td + d.Tg) {
        idx = (idx + 1) % 2;
        subStart = tt;
        window.XGVE_RMASK = null;
        raf = requestAnimationFrame(draw);
        return;
      }
      var rf = phaseRF(e, d);
      if (rf >= 0) {
        if (cur === 0) drawGrid(foxCells, rf, 0.85, 0.72, 0.28, "right", true);else drawGrid(wordCells, rf, 0.30, 0.19, 0.40, "bl", false);
      } else {
        window.XGVE_RMASK = null;
        if (!reduced && (now / 500 | 0) % 2 === 0) {
          // blink where the next build starts
          var cx2 = idx === 0 ? W * 0.055 : W * 0.85,
            cy2 = idx === 0 ? H * 0.88 : H * 0.76;
          ctx.font = "500 14px 'IBM Plex Mono', monospace";
          ctx.globalAlpha = 0.7;
          ctx.fillStyle = "rgba(198,204,214,0.9)";
          ctx.fillText("\u2589", cx2, cy2);
          ctx.globalAlpha = 1;
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    var tries = 0;
    (function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.foxglove)) {
        if (tries++ < 60) {
          setTimeout(start, 80);
          return;
        }
      }
      prep();
      subStart = 0;
      raf = requestAnimationFrame(draw);
    })();
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-foxglove-ghost.js", error: String((e && e.message) || e) }); }

// site/xgve-foxglove.jsx
try { (() => {
/* XGVE Studios — Foxglove Multiversal landing (recreation of direction 1c).
 * Flagship game hero: flora emblem reconstructed from glyph text, spec column,
 * continuity labels. Opened from the Work overlay. Plain-React recreation
 * (no DS bundle here) — ProgressRing + buttons are simple cosmetic versions.
 */
(function () {
  const React = window.React;
  const {
    useEffect,
    useRef
  } = React;
  const NOISE = ['#', '@', '8', '0', '%', '&', '?', '7', '1', '$', 'X', 'B', 'H', ':', '.', '*', '=', '+', 'o', 'w'];

  /* Foxglove flora, reconstructed bottom-up from glyph noise (window.XG_ASCII.foxglove). */
  function FoxgloveAscii({
    font,
    dur
  }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current,
        DATA = window.XG_ASCII;
      if (!el || !DATA || !DATA.foxglove) {
        if (el) el.textContent = "";
        return;
      }
      const grid = DATA.foxglove,
        C = grid.cols,
        R = grid.rows,
        chars = grid.chars,
        cols = grid.colors;
      const fs = font,
        lh = fs * 1.15,
        cw = fs * 0.6;
      el.style.position = "relative";
      el.style.width = C * cw + "px";
      el.style.height = R * lh + "px";
      el.innerHTML = "";
      const mk = (color, glow) => {
        const p = document.createElement("pre");
        p.style.cssText = 'margin:0;position:absolute;inset:0;font-family:"IBM Plex Mono",monospace;font-size:' + fs + 'px;line-height:' + lh + 'px;white-space:pre;letter-spacing:0;color:' + color + ';text-shadow:' + glow + ';pointer-events:none;';
        return p;
      };
      const white = mk("#e9eaec", "0 0 " + fs * 0.5 + "px rgba(150,160,175,.22)");
      const red = mk("#ff2233", "0 0 " + fs * 0.9 + "px rgba(255,34,51,.5)");
      el.appendChild(white);
      el.appendChild(red);
      const th = new Float32Array(C * R);
      for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) {
        let t = 1 - y / R;
        t = t * 0.8 + Math.random() * 0.2;
        th[y * C + x] = Math.min(0.999, t);
      }
      let start = 0,
        done = false,
        raf = 0,
        lastFlick = 0;
      const render = (p, flicker) => {
        let w = "",
          r = "";
        for (let y = 0; y < R; y++) {
          const cs = chars[y] || "",
            ks = cols[y] || "",
            base = y * C;
          let wl = "",
            rl = "";
          for (let x = 0; x < C; x++) {
            const ch = cs[x];
            if (ch === " " || ch === undefined) {
              wl += " ";
              rl += " ";
              continue;
            }
            const t = th[base + x],
              isR = ks[x] === "r";
            if (p >= t) {
              let o = ch;
              if (flicker && Math.random() < 0.012) o = NOISE[Math.random() * NOISE.length | 0];
              if (isR) {
                rl += o;
                wl += " ";
              } else {
                wl += o;
                rl += " ";
              }
            } else if (p >= t - 0.11) {
              const g = NOISE[Math.random() * NOISE.length | 0];
              if (isR) {
                rl += g;
                wl += " ";
              } else {
                wl += g;
                rl += " ";
              }
            } else {
              wl += " ";
              rl += " ";
            }
          }
          w += wl + "\n";
          r += rl + "\n";
        }
        white.textContent = w;
        red.textContent = r;
      };
      const loop = now => {
        if (!start) start = now;
        if (!done) {
          let p = (now - start) / dur;
          if (p >= 1) {
            p = 1;
            done = true;
            render(1);
          } else render(p);
        } else if (now - lastFlick > 150) {
          lastFlick = now;
          render(1, true);
        }
        raf = requestAnimationFrame(loop);
      };
      render(0);
      raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }, [font, dur]);
    return React.createElement("div", {
      ref: ref,
      "aria-hidden": true
    });
  }
  function Ring({
    value,
    size
  }) {
    const r = (size - 8) / 2,
      c = 2 * Math.PI * r,
      off = c * (1 - value / 100);
    return React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        flex: "none"
      }
    }, React.createElement("svg", {
      width: size,
      height: size,
      style: {
        transform: "rotate(-90deg)"
      }
    }, React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#26262a",
      strokeWidth: 3
    }), React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "#e6021b",
      strokeWidth: 3,
      strokeDasharray: c,
      strokeDashoffset: off
    })), React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: 15,
        color: "#fff",
        fontWeight: 600
      }
    }, value));
  }
  const mono = extra => Object.assign({
    fontFamily: "IBM Plex Mono, monospace"
  }, extra || {});
  function FoxgloveLanding({
    onClose
  }) {
    const btn = primary => ({
      fontFamily: "IBM Plex Mono, monospace",
      fontSize: 12,
      letterSpacing: ".1em",
      padding: "13px 22px",
      cursor: "pointer",
      border: "1px solid " + (primary ? "#e6021b" : "#313136"),
      background: primary ? "#e6021b" : "transparent",
      color: "#fff",
      textTransform: "uppercase"
    });
    const tag = mono({
      fontSize: 10,
      letterSpacing: ".1em",
      color: "#a8a9b0",
      border: "1px solid #313136",
      padding: "4px 9px"
    });
    return React.createElement("section", {
      className: "fox",
      "data-screen-label": "Foxglove Multiversal",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 70,
        background: "radial-gradient(150% 130% at 76% 50%, #0e0e11 0%, #000 60%)",
        display: "flex",
        alignItems: "center",
        padding: "0 clamp(30px,6vw,80px)",
        overflow: "hidden",
        animation: "work-in .5s ease-out both"
      }
    }, React.createElement("button", {
      onClick: onClose,
      style: mono({
        position: "absolute",
        top: 34,
        right: 40,
        zIndex: 5,
        background: "none",
        border: 0,
        color: "#83848c",
        fontSize: 11,
        letterSpacing: ".16em",
        textTransform: "uppercase",
        cursor: "pointer"
      })
    }, "\u2190 Back"),
    // ---- left: spec column ----
    React.createElement("div", {
      style: {
        width: 520,
        flex: "none",
        zIndex: 2
      }
    }, React.createElement("div", {
      style: mono({
        fontSize: 11,
        letterSpacing: ".14em",
        color: "#83848c",
        textTransform: "uppercase"
      })
    }, "Flagship // Flora_Series \u00b7 \u03b1-XGVE-7A"), React.createElement("h2", {
      style: {
        fontFamily: "Space Grotesk, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(46px,6vw,72px)",
        lineHeight: .92,
        color: "#fff",
        margin: "16px 0 0",
        letterSpacing: "-.02em"
      }
    }, "Foxglove", React.createElement("br"), "Multiversal", React.createElement("span", {
      style: {
        color: "#e6021b"
      }
    }, ".")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        margin: "24px 0"
      }
    }, ["Simulation", "Roguelite", "Liminal"].map(t => React.createElement("span", {
      key: t,
      style: tag
    }, t.toUpperCase()))), React.createElement("p", {
      style: {
        fontFamily: "Inter, sans-serif",
        fontSize: 15,
        lineHeight: 1.66,
        color: "#a8a9b0",
        maxWidth: 430,
        margin: 0
      }
    }, "An alternate-history enterprise OS that reconstructs reality through text. Clock in, roll back, and watch the whole system reboot itself from institutional memory."), React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        margin: "28px 0 30px"
      }
    }, React.createElement(Ring, {
      value: 98,
      size: 74
    }), React.createElement("div", {
      style: mono({
        fontSize: 10,
        lineHeight: 1.9,
        color: "#83848c",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Status: ", React.createElement("b", {
      style: {
        color: "#ff2233"
      }
    }, "TBC"), React.createElement("br"), "Engine: Continuity")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, React.createElement("a", {
      href: "mailto:hello@xgve.io?subject=Foxglove%20Multiversal%20updates",
      style: Object.assign({
        textDecoration: "none",
        display: "inline-block"
      }, btn(true))
    }, "Get updates"))),
    // ---- right: flora reconstruction ----
    React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minWidth: 0
      }
    }, React.createElement("div", {
      style: mono({
        position: "absolute",
        top: "8%",
        right: "2%",
        textAlign: "right",
        fontSize: 10,
        lineHeight: 1.7,
        color: "#83848c",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Continuity Label", React.createElement("br"), "\u03b1-XGVE-7A", React.createElement("br"), "Subject: ", React.createElement("b", {
      style: {
        color: "#e9eaec"
      }
    }, "Flora"), React.createElement("br"), "Stability: ", React.createElement("b", {
      style: {
        color: "#e9eaec"
      }
    }, "0.9837")), React.createElement("div", {
      style: mono({
        position: "absolute",
        left: "2%",
        top: "22%",
        fontSize: 10,
        lineHeight: 1.8,
        color: "#5c5d64",
        textTransform: "uppercase",
        letterSpacing: ".08em"
      })
    }, "Node_0043.A", React.createElement("br"), "> reconstruct", React.createElement("br"), "> validate", React.createElement("br"), "> commit"), React.createElement(FoxgloveAscii, {
      font: 8,
      dur: 4200
    })));
  }
  window.XGVE_FoxgloveLanding = FoxgloveLanding;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-foxglove.jsx", error: String((e && e.message) || e) }); }

// site/xgve-lockup.jsx
try { (() => {
/* XGVE Studios — redline emblem component (the real mark, layered for motion).
 * Phase "intro" → revving (hot rev + flutter + shudder); "idle" → settled + idle loop.
 * idle: "pulse" (signal pulse, locked default) | "stream" (pixel stream).
 */
(function () {
  const React = window.React;
  function RedlineEmblem({
    phase,
    idle
  }) {
    const cls = "rl-emblem " + (phase === "intro" ? "is-revving" : "is-settled");
    return React.createElement("div", {
      className: cls,
      "data-idle": idle || "pulse",
      role: "img",
      "aria-label": "XGVE"
    }, React.createElement("div", {
      className: "rl-layer rl-structure"
    }), React.createElement("div", {
      className: "rl-sheen",
      "aria-hidden": true
    }), React.createElement("div", {
      className: "rl-rev"
    }, React.createElement("div", {
      className: "rl-layer rl-needle"
    }, React.createElement("div", {
      className: "rl-heat"
    }))), React.createElement("span", {
      className: "rl-px p1"
    }), React.createElement("span", {
      className: "rl-px p2"
    }), React.createElement("span", {
      className: "rl-px p3"
    }), React.createElement("span", {
      className: "rl-px p4"
    }));
  }
  window.XGVE_RedlineEmblem = RedlineEmblem;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-lockup.jsx", error: String((e && e.message) || e) }); }

// site/xgve-masks.js
try { (() => {
/* XGVE Studios — rotating ASCII mask PILLAR (left of the hero).
 * A single tall canvas: 4 rows stacked; each row is a turntable of 4 face-relief
 * masks orbiting a full 360° (front → profile → back → profile). White dot cloud
 * with scarce red, on a faint turntable podium. window.XGVE_initMasks(container).
 */
(function () {
  function g(u, v, cu, cv, su, sv) {
    var du = (u - cu) / su,
      dv = (v - cv) / sv;
    return Math.exp(-(du * du + dv * dv));
  }
  function band(v, a, b) {
    if (v < a || v > b) return 0;
    var t = (v - a) / (b - a);
    return Math.sin(t * Math.PI);
  }
  function buildMaskPoints() {
    var pts = [],
      step = 0.08;
    for (var v = -1.05; v <= 1.05; v += step) {
      for (var u = -0.95; u <= 0.95; u += step) {
        var ex = u / 0.80,
          ey = (v - 0.05) / 1.05;
        if (ex * ex + ey * ey > 1) continue;
        var z = Math.cos(u * 1.3) * Math.cos((v - 0.05) * 0.95);
        if (z < 0) z = 0;
        z -= 0.60 * g(u, v, 0.33, 0.30, 0.15, 0.13);
        z -= 0.60 * g(u, v, -0.33, 0.30, 0.15, 0.13);
        z += 0.16 * g(u, v, 0.33, 0.48, 0.20, 0.08);
        z += 0.16 * g(u, v, -0.33, 0.48, 0.20, 0.08);
        z += 0.42 * Math.exp(-Math.pow(u / 0.09, 2)) * band(v, -0.22, 0.36);
        z -= 0.18 * g(u, v, 0.085, -0.26, 0.06, 0.06);
        z -= 0.18 * g(u, v, -0.085, -0.26, 0.06, 0.06);
        z -= 0.28 * g(u, v, 0, -0.52, 0.27, 0.09);
        if (z < 0) z = 0;
        pts.push({
          x: u,
          y: v - 0.05,
          z: z * 0.8,
          red: Math.random() < 0.04
        });
      }
    }
    return pts;
  }
  window.XGVE_initMasks = function (container) {
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ROWS = 4,
      PER = 4;
    var pts = buildMaskPoints();
    var W = 240,
      H = 600,
      dpr = Math.min(2, window.devicePixelRatio || 1);
    var cv = document.createElement("canvas");
    cv.width = W * dpr;
    cv.height = H * dpr;
    cv.style.width = W + "px";
    cv.style.height = H + "px";
    cv.style.display = "block";
    container.appendChild(cv);
    var ctx = cv.getContext("2d");
    ctx.scale(dpr, dpr);
    var maskScale = 42,
      R = 52,
      pf = 250,
      cx = W / 2,
      rowH = H / ROWS;
    var maxW = R + maskScale * 1.1;
    function drawMask(theta, rowCy) {
      var ct = Math.cos(theta),
        st = Math.sin(theta);
      var slotX = st * R,
        slotZ = ct * R;
      var depth = (slotZ + maxW) / (2 * maxW); // 0 back .. 1 front
      var aBase = 0.12 + Math.pow(Math.max(0, depth), 1.3) * 0.95;
      for (var p = 0; p < pts.length; p++) {
        var pt = pts[p];
        var Xr = pt.x * ct + pt.z * st;
        var Zr = -pt.x * st + pt.z * ct;
        var wx = Xr * maskScale + slotX;
        var wz = Zr * maskScale + slotZ;
        var persp = pf / (pf - wz);
        var sx = cx + wx * persp;
        var sy = rowCy - pt.y * maskScale * persp;
        var a = aBase * (0.75 + 0.25 * persp);
        if (a > 1) a = 1;
        var sz = 0.7 + persp * 0.7;
        if (pt.red) ctx.fillStyle = "rgba(255,42,56," + a.toFixed(2) + ")";else ctx.fillStyle = "rgba(233,234,236," + (a * 0.92).toFixed(2) + ")";
        ctx.fillRect(sx, sy, sz, sz);
      }
    }
    function drawPodium(rowCy, ph) {
      var py0 = rowCy + maskScale * 1.15,
        rx = R + maskScale * 0.55,
        ry = 13;
      for (var k = 0; k < 54; k++) {
        var th = k / 54 * Math.PI * 2 + ph;
        var px = cx + Math.cos(th) * rx,
          py = py0 + Math.sin(th) * ry;
        ctx.fillStyle = k % 16 === 0 ? "rgba(255,42,56,.5)" : "rgba(120,124,132,.34)";
        ctx.fillRect(px, py, 1, 1);
      }
    }
    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      var base = reduced ? 0.4 : now * 0.00046;
      for (var r = 0; r < ROWS; r++) {
        var rowCy = (r + 0.5) * rowH;
        drawPodium(rowCy, base * 0.8 + r);
        var Ar = base + r * 0.7;
        // order the 4 masks back-to-front
        var order = [];
        for (var k = 0; k < PER; k++) {
          var th = Ar + k * (Math.PI / 2);
          order.push({
            th: th,
            z: Math.cos(th)
          });
        }
        order.sort(function (a, b) {
          return a.z - b.z;
        });
        for (var i = 0; i < order.length; i++) drawMask(order[i].th, rowCy);
      }
      raf = requestAnimationFrame(frame);
    }
    var raf = requestAnimationFrame(frame);
    if (reduced) {
      cancelAnimationFrame(raf);
      frame(0);
    }
    return function () {
      cancelAnimationFrame(raf);
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-masks.js", error: String((e && e.message) || e) }); }

// site/xgve-site.jsx
try { (() => {
/* XGVE Studios — hero: screen-wide geometric ASCII field (background) + the
 * emblem rendered half-ASCII (left) / metallic (right), with the tagline below.
 * Minimal corners; a glyph trail follows the cursor.
 */
(function () {
  const React = window.React;
  const h = React.createElement;
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const {
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakRadio,
    TweakToggle
  } = window;
  const RedlineEmblem = window.XGVE_RedlineEmblem;
  const WorkOverlay = window.XGVE_WorkOverlay;
  const WORDMARK = "../assets/wordmark/xgve-wordmark-redx.png";
  const IDLE_CLASS = {
    "Signal pulse": "pulse",
    "Pixel stream": "stream"
  };
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "idle": "Signal pulse",
    "field": true,
    "vignette": true,
    "grain": false
  } /*EDITMODE-END*/;
  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const idleKey = IDLE_CLASS[t.idle] || "pulse";
    const [wins, setWins] = useState({
      fox: false,
      readme: false,
      contact: false
    });
    const [paused, setPaused] = useState(false);
    const fieldRef = useRef(null);
    const embRef = useRef(null);
    const ghostRef = useRef(null);

    // ESC closes windows
    useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") setWins({
          fox: false,
          readme: false,
          contact: false
        });
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    // cursor glyph trail
    useEffect(() => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const GLYPHS = "#@8%&$X017=+*:.";
      let last = 0;
      const onMove = e => {
        const now = performance.now();
        if (now - last < 26) return;
        last = now;
        const trail = document.querySelector(".ascii-trail");
        if (!trail) return;
        for (let k = 0; k < 3; k++) {
          // ascii brush: 3 glyphs per stroke
          const s = document.createElement("span");
          s.className = "tglyph";
          s.textContent = GLYPHS[Math.random() * GLYPHS.length | 0];
          s.style.left = e.clientX + (Math.random() - 0.5) * 28 + "px";
          s.style.top = e.clientY + (Math.random() - 0.5) * 28 + "px";
          s.style.color = Math.random() < 0.16 ? "#ff2a38" : "#e9eaec";
          s.style.fontSize = (16 + Math.random() * 10).toFixed(1) + "px";
          trail.appendChild(s);
          const dx = (Math.random() - 0.5) * 18;
          s.animate([{
            opacity: 0.9,
            transform: "translate(-50%,-50%) scale(1)"
          }, {
            opacity: 0,
            transform: "translate(-50%,-50%) translate(" + dx.toFixed(1) + "px,-30px) scale(0.55)"
          }], {
            duration: 1400 + Math.random() * 600,
            easing: "ease-out"
          }).onfinish = () => s.remove();
        }
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // mount the ascii field (bg) + the ascii half of the emblem
    useEffect(() => {
      let alive = true;
      const dz = [];
      let tries = 0;
      const boot = () => {
        if (!alive) return;
        if (window.XGVE_initAsciiField && fieldRef.current && !fieldRef.current.dataset.on) {
          fieldRef.current.dataset.on = "1";
          dz.push(window.XGVE_initAsciiField(fieldRef.current));
        }
        if (window.XGVE_initAsciiEmblem && embRef.current && !embRef.current.dataset.on) {
          embRef.current.dataset.on = "1";
          dz.push(window.XGVE_initAsciiEmblem(embRef.current));
        }
        if (window.XGVE_initFoxgloveGhost && ghostRef.current && !ghostRef.current.dataset.on) {
          ghostRef.current.dataset.on = "1";
          dz.push(window.XGVE_initFoxgloveGhost(ghostRef.current));
        }
        if ((!window.XGVE_initAsciiField || !window.XGVE_initAsciiEmblem || !window.XGVE_initFoxgloveGhost) && tries < 50) {
          tries++;
          setTimeout(boot, 60);
        }
      };
      boot();
      return () => {
        alive = false;
        dz.forEach(d => d && d());
      };
    }, []);
    return h("div", {
      className: "stage phase-idle",
      "data-grain": t.grain ? "on" : "off",
      "data-vignette": t.vignette ? "on" : "off"
    }, t.field && h("canvas", {
      className: "ascii-field",
      ref: fieldRef,
      "aria-hidden": true
    }), t.field && h("canvas", {
      className: "foxglove-ghost",
      ref: ghostRef,
      "aria-hidden": true
    }), h("div", {
      className: "grain",
      "aria-hidden": true
    }), h("div", {
      className: "ascii-trail",
      "aria-hidden": true
    }),
    // ---- emblem (half ascii / half metallic) + tagline ----
    h("div", {
      className: "stage-inner"
    }, h("div", {
      className: "rl-lockup"
    }, h("div", {
      className: "emblem-split"
    }, h("div", {
      className: "es-metal"
    }, h(RedlineEmblem, {
      phase: "idle",
      idle: idleKey
    })), h("canvas", {
      className: "es-ascii",
      ref: embRef,
      "aria-hidden": true
    })), h("p", {
      className: "rl-tagline"
    }, "Good taste, envisioned", h("span", {
      className: "dot"
    }, ".")))),
    // ---- minimal corners ----
    h("div", {
      className: "hud"
    }, h("div", {
      className: "corner tl"
    }, h("div", {
      className: "tl-mini",
      "aria-hidden": true
    }, h("div", {
      className: "rl-layer rl-structure"
    }), h("div", {
      className: "rl-layer rl-needle"
    }), h("span", {
      className: "rl-px p1"
    }), h("span", {
      className: "rl-px p2"
    }), h("span", {
      className: "rl-px p3"
    }), h("span", {
      className: "rl-px p4"
    })), h("img", {
      className: "tl-wordmark",
      src: WORDMARK,
      alt: "XGVE",
      draggable: false,
      style: {
        height: "30px",
        width: "auto",
        display: "block"
      }
    })), h("div", {
      className: "corner tr"
    }, h("button", {
      className: "navlink pp-btn",
      "aria-label": paused ? "Play" : "Pause",
      title: paused ? "Play" : "Pause",
      onClick: () => {
        const p = !paused;
        setPaused(p);
        window.XGVE_PAUSED = p;
      }
    }, paused ? h("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      style: {
        display: "block"
      }
    }, h("path", {
      d: "M7 4 L20 12 L7 20 Z",
      fill: "currentColor"
    })) : h("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      "aria-hidden": true,
      style: {
        display: "block"
      }
    }, h("rect", {
      x: 6,
      y: 4,
      width: 4.6,
      height: 16,
      fill: "currentColor"
    }), h("rect", {
      x: 13.4,
      y: 4,
      width: 4.6,
      height: 16,
      fill: "currentColor"
    })))), h("div", {
      className: "corner bl"
    }, "\u00a9 2026 XGVE STUDIOS\u2122"), h("div", {
      className: "corner br"
    }, h("button", {
      className: "navlink",
      onClick: () => setWins(w => ({
        ...w,
        readme: !w.readme
      }))
    }, "readme"), h("button", {
      className: "navlink",
      onClick: () => setWins(w => ({
        ...w,
        contact: !w.contact
      }))
    }, "contact"), h("button", {
      className: "navlink",
      style: {
        color: "#ff2a38",
        borderColor: "rgba(216,32,46,0.6)"
      },
      onClick: () => setWins(w => ({
        ...w,
        fox: !w.fox
      }))
    }, "Foxglove Multiversal"))), wins.contact && window.XGVE_ContactWindow && h(window.XGVE_ContactWindow, {
      onClose: () => setWins(w => ({
        ...w,
        contact: false
      }))
    }), wins.fox && window.XGVE_FoxWindow && h(window.XGVE_FoxWindow, {
      onClose: () => setWins(w => ({
        ...w,
        fox: false
      }))
    }), wins.readme && window.XGVE_ReadmeWindow && h(window.XGVE_ReadmeWindow, {
      onClose: () => setWins(w => ({
        ...w,
        readme: false
      }))
    }), h(TweaksPanel, null, h(TweakSection, {
      label: "Emblem"
    }), h(TweakRadio, {
      label: "Idle",
      value: t.idle,
      options: Object.keys(IDLE_CLASS),
      onChange: v => setTweak("idle", v)
    }), h(TweakSection, {
      label: "Atmosphere"
    }), h(TweakToggle, {
      label: "ASCII field",
      value: t.field,
      onChange: v => setTweak("field", v)
    }), h(TweakToggle, {
      label: "Vignette",
      value: t.vignette,
      onChange: v => setTweak("vignette", v)
    }), h(TweakToggle, {
      label: "Film grain",
      value: t.grain,
      onChange: v => setTweak("grain", v)
    })));
  }
  window.XGVE_App = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-site.jsx", error: String((e && e.message) || e) }); }

// site/xgve-windows.jsx
try { (() => {
/* XGVE Studios — minimalist retro draggable windows (1b style).
 * RetroWindow: thin-border mono title-bar window, draggable by its title bar,
 * square glyph closes it. FoxgloveWindow (FOXGLOVE_MULTIVERSAL.APP: flora ASCII +
 * spec column) and ReadmeWindow (readme.txt). Exposed on window.*.
 */
(function () {
  const React = window.React;
  const h = React.createElement;
  function useDrag(x0, y0) {
    const [p, setP] = React.useState({
      x: x0,
      y: y0
    });
    const ref = React.useRef(p);
    ref.current = p;
    const off = React.useRef(null);
    return [p, {
      onPointerDown: e => {
        off.current = {
          dx: e.clientX - ref.current.x,
          dy: e.clientY - ref.current.y
        };
        e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
      },
      onPointerMove: e => {
        if (off.current) setP({
          x: e.clientX - off.current.dx,
          y: e.clientY - off.current.dy
        });
      },
      onPointerUp: () => {
        off.current = null;
      },
      style: {
        cursor: "grab",
        touchAction: "none"
      }
    }];
  }
  const MONO = "'IBM Plex Mono', monospace";
  /* PLACEHOLDER links — swap for real handles before launch */
  const LINKS = [["X / TWITTER", "https://x.com/xgvestudios"], ["ITCH.IO", "https://xgve.itch.io"], ["GITHUB", "https://github.com/xgve"], ["DISCORD", "https://discord.gg/xgve"]];
  const WISHLIST_URL = ""; // set to the Steam/itch store page when live — chip becomes the wishlist link

  function RetroWindow({
    title,
    x0,
    y0,
    w,
    onClose,
    children
  }) {
    const [p, dragProps] = useDrag(x0, y0);
    return h("div", {
      style: {
        position: "fixed",
        left: p.x,
        top: p.y,
        width: w,
        zIndex: 90,
        background: "#070709",
        border: "1px solid #33363d",
        boxShadow: "0 12px 40px rgba(0,0,0,.6)",
        fontFamily: MONO,
        animation: "xgwin-in .16s ease-out"
      }
    }, h("div", Object.assign({}, dragProps, {
      style: Object.assign({
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 12px",
        borderBottom: "1px solid #33363d",
        userSelect: "none"
      }, dragProps.style)
    }), h("button", {
      onClick: onClose,
      onPointerDown: function (e) {
        e.stopPropagation();
      },
      title: "Close",
      className: "xgwin-close",
      style: {
        width: 11,
        height: 11,
        flex: "none",
        background: "transparent",
        border: "1px solid #83848c",
        cursor: "pointer",
        padding: 0
      }
    }), h("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: "#c6ced8",
        textTransform: "uppercase",
        overflow: "hidden",
        whiteSpace: "nowrap"
      }
    }, title), h("span", {
      style: {
        width: 11,
        flex: "none"
      }
    })), children);
  }
  function Flora({
    w,
    hpx
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const cv = ref.current,
        g = window.XG_ASCII && window.XG_ASCII.foxglove;
      if (!cv || !g) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = w * dpr;
      cv.height = hpx * dpr;
      cv.style.width = w + "px";
      cv.style.height = hpx + "px";
      const x = cv.getContext("2d");
      x.scale(dpr, dpr);
      const C = g.cols,
        R = g.rows,
        ch = hpx / R,
        cw = ch * 0.62;
      const ox = (w - cw * C) / 2;
      const t0 = performance.now();
      let raf = 0,
        prev = 0;
      const NOISE = "01#@%&$X=+*".split("");
      function paint(now) {
        if (now - prev > 90) {
          prev = now;
          const el = (now - t0) / 2800,
            rf = el >= 1 ? 1 : el * el * (3 - 2 * el);
          x.clearRect(0, 0, w, hpx);
          x.textBaseline = "middle";
          x.textAlign = "center";
          x.font = "500 " + (ch * 0.95).toFixed(1) + "px " + MONO;
          for (let yy = 0; yy < R; yy++) {
            const o = 1 - yy / R; // bottom builds first (like the original)
            if (o > rf) continue;
            const cr = g.chars[yy] || "",
              kr = g.colors && g.colors[yy] || "";
            for (let xx = 0; xx < C; xx++) {
              let c = cr[xx];
              if (c === " " || c === undefined) continue;
              if (rf < 1 && o > rf - 0.08) c = NOISE[Math.random() * NOISE.length | 0];else if (Math.random() < 0.012) c = NOISE[Math.random() * NOISE.length | 0];
              const hsh = (xx * 7 + yy * 13) % 23;
              x.fillStyle = kr[xx] === "r" || hsh === 0 ? "#e6202e" : hsh < 3 ? "#4fa3c0" : hsh < 8 ? "#6f7480" : "#c6ced8";
              x.fillText(c, ox + xx * cw + cw / 2, yy * ch + ch / 2);
            }
          }
        }
        raf = requestAnimationFrame(paint);
      }
      raf = requestAnimationFrame(paint);
      return () => cancelAnimationFrame(raf);
    }, [w, hpx]);
    return h("canvas", {
      ref: ref,
      "aria-hidden": true,
      style: {
        display: "block",
        flex: "none"
      }
    });
  }
  function FoxgloveWindow({
    onClose
  }) {
    return h(RetroWindow, {
      title: "FOXGLOVE_MULTIVERSAL.APP",
      x0: Math.max(12, window.innerWidth - 560),
      y0: 80,
      w: Math.min(480, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        display: "flex",
        gap: 18,
        padding: 16
      }
    }, h(Flora, {
      w: 240,
      hpx: 330
    }), h("div", {
      style: {
        flex: 1,
        minWidth: 0,
        paddingTop: 8
      }
    }, h("div", {
      style: {
        fontSize: 10,
        letterSpacing: "0.22em",
        color: "#565b64",
        textTransform: "uppercase"
      }
    }, "FLORA_SERIES"), h("div", {
      style: {
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 1.08,
        color: "#fff",
        margin: "10px 0 14px"
      }
    }, "Foxglove", h("br"), "Multiversal"), h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 9,
        marginBottom: 18
      }
    }, h("div", {
      style: {
        background: "#c11722",
        color: "#fff",
        fontSize: 10,
        letterSpacing: "0.16em",
        padding: "6px 10px"
      }
    }, "\u25cf IN DEVELOPMENT"), h("a", {
      href: WISHLIST_URL || "mailto:hello@xgve.io?subject=" + encodeURIComponent("Notify me: Foxglove Multiversal"),
      target: WISHLIST_URL ? "_blank" : undefined,
      rel: WISHLIST_URL ? "noopener" : undefined,
      title: WISHLIST_URL ? "Wishlist Foxglove Multiversal" : "Get notified when Foxglove Multiversal is available to wishlist",
      className: "xgwl-btn",
      style: {
        display: "inline-block",
        background: "transparent",
        border: "1px solid #83848c",
        color: "#e9eaec",
        fontSize: 10,
        letterSpacing: "0.16em",
        padding: "6px 12px",
        textDecoration: "none",
        cursor: "pointer"
      }
    }, "WISHLIST")), h("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.8,
        color: "#6f7480"
      }
    }, "Climb the corporate ladder while unravelling the mysteries at Foxglove Multiversal."))));
  }
  function ReadmeWindow({
    onClose
  }) {
    return h(RetroWindow, {
      title: "readme.txt",
      x0: Math.max(12, Math.min(70, window.innerWidth - 452)),
      y0: Math.max(60, window.innerHeight - 360),
      w: Math.min(440, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        padding: "18px 22px 22px",
        fontSize: 12.5,
        lineHeight: 1.95,
        color: "#c6ced8"
      }
    }, h("div", null, "XGVE is an experimental studio bringing good ideas to life through taste, technology, and intentional design."), h("div", {
      style: {
        marginTop: 22,
        color: "#565b64"
      }
    }, "// continuity note ................"), h("div", {
      style: {
        color: "#3f434c"
      }
    }, "you have been here before.")));
  }
  function ContactWindow({
    onClose
  }) {
    const [em, setEm] = React.useState("");
    const dim = {
      color: "#565b64"
    };
    const lnk = {
      color: "#c6ced8",
      textDecoration: "none",
      letterSpacing: "0.12em"
    };
    return h(RetroWindow, {
      title: "contact.txt",
      x0: Math.max(12, (window.innerWidth - 380) / 2),
      y0: 110,
      w: Math.min(380, window.innerWidth - 24),
      onClose: onClose
    }, h("div", {
      style: {
        padding: "18px 20px 22px",
        fontSize: 12.5,
        lineHeight: 2,
        color: "#c6ced8"
      }
    }, h("a", {
      href: "mailto:hello@xgve.io",
      style: {
        color: "#fff",
        textDecoration: "none",
        letterSpacing: "0.1em"
      }
    }, "hello@xgve.io"), h("div", {
      style: Object.assign({
        marginTop: 16
      }, dim)
    }, "// socials"), LINKS.map(function (l) {
      return h("div", {
        key: l[0]
      }, h("a", {
        href: l[1],
        target: "_blank",
        rel: "noopener",
        style: lnk
      }, l[0]));
    }), h("div", {
      style: Object.assign({
        marginTop: 16
      }, dim)
    }, "// mailing list"), h("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 6
      }
    }, h("input", {
      value: em,
      onChange: function (e) {
        setEm(e.target.value);
      },
      placeholder: "you@domain",
      style: {
        flex: 1,
        minWidth: 0,
        background: "#0b0b0e",
        border: "1px solid #33363d",
        color: "#e9eaec",
        fontFamily: MONO,
        fontSize: 12,
        padding: "7px 9px",
        outline: "none"
      }
    }), h("button", {
      onClick: function () {
        location.href = "mailto:hello@xgve.io?subject=Mailing%20list&body=" + encodeURIComponent("Subscribe: " + em);
      },
      style: {
        background: "transparent",
        border: "1px solid #83848c",
        color: "#e9eaec",
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: "0.14em",
        padding: "7px 10px",
        cursor: "pointer"
      }
    }, "[ SUBSCRIBE ]"))));
  }
  window.XGVE_FoxWindow = FoxgloveWindow;
  window.XGVE_ReadmeWindow = ReadmeWindow;
  window.XGVE_ContactWindow = ContactWindow;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-windows.jsx", error: String((e && e.message) || e) }); }

// site/xgve-work.jsx
try { (() => {
/* XGVE Studios — Selected Work overlay.
 * A no-scroll, in-place reveal. Foxglove Multiversal is the only project; clicking
 * it opens the Foxglove Multiversal landing (direction 1c).
 */
(function () {
  const React = window.React;
  const {
    useState
  } = React;
  const PROJECTS = [{
    id: "foxglove",
    name: "Foxglove Multiversal",
    type: "Game",
    year: "TBC"
  }];
  function WorkOverlay({
    onClose
  }) {
    const [openId, setOpenId] = useState(null);
    const FoxgloveLanding = window.XGVE_FoxgloveLanding;
    React.useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") {
          if (openId) setOpenId(null);else onClose();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [openId, onClose]);
    if (openId === "foxglove" && FoxgloveLanding) {
      return React.createElement(FoxgloveLanding, {
        onClose: () => setOpenId(null)
      });
    }
    return React.createElement("section", {
      className: "work",
      "data-screen-label": "Selected work"
    }, React.createElement("div", {
      className: "work-head"
    }, React.createElement("div", {
      className: "work-eyebrow"
    }, "Selected work ", React.createElement("b", null, "// " + PROJECTS.length)), React.createElement("button", {
      className: "navlink work-eyebrow",
      onClick: onClose,
      style: {
        pointerEvents: "auto",
        cursor: "pointer",
        background: "none",
        border: 0,
        color: "var(--content-secondary)"
      }
    }, "Close \u2715")), React.createElement("div", {
      className: "work-list"
    }, PROJECTS.map((p, i) => React.createElement("div", {
      className: "work-row",
      key: p.id,
      onClick: () => setOpenId(p.id),
      style: {
        cursor: "pointer"
      }
    }, React.createElement("div", {
      className: "work-idx"
    }, String(i + 1).padStart(2, "0")), React.createElement("div", {
      className: "work-name"
    }, p.name, React.createElement("span", {
      className: "arrow"
    }, "\u2192")), React.createElement("div", {
      className: "work-type"
    }, p.type), React.createElement("div", {
      className: "work-year"
    }, p.year)))), React.createElement("div", {
      className: "work-note"
    }, "Open a project to view it."));
  }
  window.XGVE_WorkOverlay = WorkOverlay;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/xgve-work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xgve-console/App.jsx
try { (() => {
/* XGVE Console — root state machine: access screen → console. */
(function () {
  const React = window.React;
  function App() {
    const [screen, setScreen] = React.useState('login');
    if (screen === 'login') {
      return React.createElement(window.XG_Login, {
        onEnter: () => setScreen('console')
      });
    }
    return React.createElement(window.XG_Console, {
      onSignOut: () => setScreen('login')
    });
  }
  window.XG_App = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xgve-console/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xgve-console/Console.jsx
try { (() => {
/* XGVE Console — dashboard surface. Composed entirely from XGVE DS components.
   Loaded via <script type="text/babel">. Exposes window.XG_Console. */
(function () {
  const React = window.React;
  const NS = window.XGVEDesignSystem_c9ef21;
  const {
    Button,
    IconButton,
    Input,
    Select,
    Switch,
    Card,
    Badge,
    Tag,
    Tabs,
    Dialog,
    Toast,
    ProgressRing
  } = NS;
  const I = window.XG_Icons;
  const mono = {
    fontFamily: 'var(--font-mono)'
  };
  const eyebrow = {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: 'var(--tracking-widest)',
    textTransform: 'uppercase',
    color: 'var(--content-muted)'
  };
  const NAV = [{
    id: 'overview',
    label: 'Overview',
    icon: 'Grid'
  }, {
    id: 'nodes',
    label: 'Projects',
    icon: 'Box'
  }, {
    id: 'builds',
    label: 'Ships',
    icon: 'Hammer'
  }, {
    id: 'ventures',
    label: 'Clients',
    icon: 'Rocket'
  }, {
    id: 'logs',
    label: 'Logs',
    icon: 'Terminal'
  }];
  const NODES = [{
    name: 'aether',
    region: 'game',
    latency: 88,
    status: 'live',
    tags: ['unity', 'steam']
  }, {
    name: 'drift-crm',
    region: 'client app',
    latency: 95,
    status: 'live',
    tags: ['saas']
  }, {
    name: 'palette',
    region: 'client app',
    latency: 100,
    status: 'live',
    tags: ['web']
  }, {
    name: 'vesper',
    region: 'game',
    latency: 60,
    status: 'degraded',
    tags: ['prototype']
  }, {
    name: 'cinder',
    region: 'client app',
    latency: 0,
    status: 'offline',
    tags: ['paused']
  }];
  const BUILDS = [{
    id: 1180,
    venture: 'Aether',
    status: 'live',
    when: '2m ago'
  }, {
    id: 1179,
    venture: 'Drift CRM',
    status: 'live',
    when: '18m ago'
  }, {
    id: 1178,
    venture: 'Aether',
    status: 'failed',
    when: '1h ago'
  }, {
    id: 1177,
    venture: 'Palette',
    status: 'live',
    when: '3h ago'
  }];
  const statusBadge = s => {
    if (s === 'live') return React.createElement(Badge, {
      variant: 'signal',
      dot: true,
      pulse: true
    }, 'Live');
    if (s === 'degraded') return React.createElement(Badge, {
      variant: 'warning',
      dot: true
    }, 'Degraded');
    if (s === 'failed') return React.createElement(Badge, {
      variant: 'signal-soft'
    }, 'Failed');
    return React.createElement(Badge, {
      variant: 'neutral',
      dot: true
    }, 'Offline');
  };
  function Icon({
    name,
    style
  }) {
    const C = I[name];
    return React.createElement('span', {
      style: Object.assign({
        display: 'inline-flex'
      }, style),
      'aria-hidden': true
    }, C ? React.createElement(C) : null);
  }

  /* ---- Sidebar ---- */
  function Sidebar({
    active,
    setActive
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 232,
        flex: 'none',
        background: 'var(--surface-inset)',
        borderRight: 'var(--border-thin) solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '4px 8px 20px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/icon/xgve-icon-transparent.png",
      alt: "XGVE",
      style: {
        width: 30,
        height: 30
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...eyebrow,
        fontSize: 11,
        color: 'var(--content-primary)'
      }
    }, "Console")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, NAV.map(n => {
      const on = active === n.id;
      return /*#__PURE__*/React.createElement("button", {
        key: n.id,
        onClick: () => setActive(n.id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          padding: '9px 10px',
          width: '100%',
          cursor: 'pointer',
          border: 'none',
          textAlign: 'left',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          fontWeight: on ? 600 : 500,
          letterSpacing: '0.01em',
          background: on ? 'var(--accent-surface)' : 'transparent',
          color: on ? 'var(--accent)' : 'var(--content-secondary)',
          borderLeft: on ? '2px solid var(--accent)' : '2px solid transparent',
          transition: 'var(--transition-colors)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 18,
          display: 'inline-flex'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: n.icon
      })), n.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 8px',
        borderTop: 'var(--border-thin) solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        background: 'var(--surface-overlay)',
        border: 'var(--border-thin) solid var(--border-default)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...mono,
        fontSize: 12,
        color: 'var(--content-secondary)'
      }
    }, "KV"), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, "K. Vega"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...eyebrow,
        fontSize: 9
      }
    }, "Operator")), /*#__PURE__*/React.createElement(IconButton, {
      label: "Sign out",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "LogOut"
    }))));
  }

  /* ---- Topbar ---- */
  function Topbar({
    title,
    onNew
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 62,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '0 24px',
        borderBottom: 'var(--border-thin) solid var(--border-subtle)',
        background: 'var(--surface-canvas)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: eyebrow
    }, "XGVE // Studio"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-tight)',
        textTransform: 'capitalize'
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 240
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search projects, ships\u2026",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "Search"
      }),
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications",
      variant: "outline"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Bell"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--accent)',
        border: '1.5px solid var(--surface-canvas)'
      }
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Settings",
      variant: "outline"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "Settings"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "Plus"
      }),
      onClick: onNew
    }, "New ship"));
  }

  /* ---- Stat cards ---- */
  function StatRing({
    value,
    label,
    metric,
    sub
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      accent: true,
      padding: "md",
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: value,
      size: 72,
      thickness: 8,
      showValue: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: eyebrow
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-tight)',
        margin: '4px 0 2px'
      }
    }, metric), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 11,
        color: 'var(--content-muted)'
      }
    }, sub))));
  }

  /* ---- Nodes table ---- */
  function NodesTable() {
    const [filter, setFilter] = React.useState('all');
    const rows = NODES.filter(n => filter === 'all' || n.status === filter);
    return /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "sm",
      style: {
        flex: 2,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        padding: '4px 4px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: eyebrow
    }, "Projects // ", rows.length), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, ['all', 'live', 'degraded'].map(f => /*#__PURE__*/React.createElement(Tag, {
      key: f,
      onClick: () => setFilter(f),
      selected: filter === f
    }, f)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 0.8fr auto',
        gap: 0
      }
    }, ['Project', 'Type', 'Progress', 'Status'].map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: h,
      style: {
        ...eyebrow,
        fontSize: 9,
        padding: '8px 8px',
        borderBottom: 'var(--border-thin) solid var(--border-default)',
        textAlign: i === 3 ? 'right' : 'left'
      }
    }, h)), rows.map(n => /*#__PURE__*/React.createElement(React.Fragment, {
      key: n.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 8px',
        borderBottom: 'var(--border-thin) solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 13,
        color: 'var(--content-primary)'
      }
    }, n.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, n.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        ...mono,
        fontSize: 9,
        color: 'var(--content-muted)',
        border: 'var(--border-thin) solid var(--border-subtle)',
        padding: '1px 4px'
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 8px',
        borderBottom: 'var(--border-thin) solid var(--border-subtle)',
        ...mono,
        fontSize: 12,
        color: 'var(--content-secondary)'
      }
    }, n.region), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 8px',
        borderBottom: 'var(--border-thin) solid var(--border-subtle)',
        ...mono,
        fontSize: 12,
        color: n.status === 'degraded' ? 'var(--xg-fn-warning)' : 'var(--content-secondary)'
      }
    }, n.status === 'offline' ? '—' : n.latency + '%'), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 8px',
        borderBottom: 'var(--border-thin) solid var(--border-subtle)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }
    }, statusBadge(n.status))))));
  }

  /* ---- Recent builds ---- */
  function BuildsList({
    extra
  }) {
    const rows = extra ? [extra, ...BUILDS] : BUILDS;
    return /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "sm",
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...eyebrow,
        padding: '4px 4px 12px'
      }
    }, "Recent ships"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, rows.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '11px 6px',
        borderTop: i === 0 ? 'none' : 'var(--border-thin) solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        fontSize: 12,
        color: 'var(--accent)',
        width: 44
      }
    }, "#", b.id), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, b.venture), /*#__PURE__*/React.createElement("div", {
      style: {
        ...mono,
        fontSize: 10,
        color: 'var(--content-muted)'
      }
    }, b.when)), statusBadge(b.status)))));
  }

  /* ---- New-build dialog ---- */
  function NewBuildDialog({
    open,
    onClose,
    onCreate
  }) {
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      eyebrow: "New ship",
      title: "Queue a ship",
      description: "Compile and deploy a project to its live target.",
      width: 500,
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        iconRight: /*#__PURE__*/React.createElement(Icon, {
          name: "ArrowRight"
        }),
        onClick: onCreate
      }, "Queue ship"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Project",
      options: ['Aether', 'Drift CRM', 'Palette'],
      defaultValue: "Aether"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Build tag",
      defaultValue: "release-candidate"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Target",
      options: ['Production', 'Staging', 'Preview'],
      defaultValue: "Production"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Switch, {
      label: "Deploy automatically on green",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Notify on failure",
      defaultChecked: true
    }))));
  }

  /* ---- Main ---- */
  function Console({
    onSignOut
  }) {
    const [active, setActive] = React.useState('overview');
    const [dialog, setDialog] = React.useState(false);
    const [toasts, setToasts] = React.useState([]);
    const [lastBuild, setLastBuild] = React.useState(null);
    const nextId = React.useRef(1181);
    const create = () => {
      const id = nextId.current++;
      setDialog(false);
      setLastBuild({
        id,
        venture: 'Aether',
        status: 'live',
        when: 'just now'
      });
      const tid = Date.now();
      setToasts(t => [{
        tid,
        id
      }, ...t].slice(0, 3));
      setTimeout(() => setToasts(t => t.filter(x => x.tid !== tid)), 4200);
    };
    const tabItems = [{
      value: 'overview',
      label: 'Overview'
    }, {
      value: 'nodes',
      label: 'Projects',
      count: NODES.length
    }, {
      value: 'builds',
      label: 'Ships',
      count: BUILDS.length
    }];
    const view = ['overview', 'nodes', 'builds'].includes(active) ? active : 'overview';
    const [tab, setTab] = React.useState('overview');
    const shown = active === 'overview' ? tab : view;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        height: '100%',
        minHeight: 0,
        background: 'var(--surface-canvas)',
        color: 'var(--content-primary)',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      active: active,
      setActive: id => {
        setActive(id);
        if (id === 'overview') setTab('overview');
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(Topbar, {
      title: NAV.find(n => n.id === active)?.label || 'Overview',
      onNew: () => setDialog(true)
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflow: 'auto',
        padding: 24
      }
    }, active === 'overview' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: tabItems,
      value: tab,
      onChange: setTab
    })), shown === 'overview' && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(StatRing, {
      value: 82,
      label: "Ship speed",
      metric: "5 days",
      sub: "avg client app"
    }), /*#__PURE__*/React.createElement(StatRing, {
      value: 48,
      label: "In play",
      metric: "3",
      sub: "games in dev"
    }), /*#__PURE__*/React.createElement(StatRing, {
      value: 90,
      label: "Delivered",
      metric: "12",
      sub: "client apps"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(NodesTable, null), /*#__PURE__*/React.createElement(BuildsList, {
      extra: lastBuild
    }))), shown === 'nodes' && /*#__PURE__*/React.createElement(NodesTable, null), shown === 'builds' && /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 520
      }
    }, /*#__PURE__*/React.createElement(BuildsList, {
      extra: lastBuild
    })), ['ventures', 'logs'].includes(active) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        padding: '80px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      indeterminate: true,
      size: 72,
      label: active
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...eyebrow
      }
    }, active, " // coming online"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--content-muted)',
        fontSize: 14,
        maxWidth: 360
      }
    }, "This surface is part of the console shell but has no sample data in this kit.")))), /*#__PURE__*/React.createElement(NewBuildDialog, {
      open: dialog,
      onClose: () => setDialog(false),
      onCreate: create
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        right: 24,
        bottom: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        zIndex: 'var(--z-toast)'
      }
    }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
      key: t.tid,
      variant: "signal",
      title: `Ship #${t.id} queued`,
      message: "Aether \xB7 production",
      onClose: () => setToasts(x => x.filter(y => y.tid !== t.tid))
    }))));
  }
  window.XG_Console = Console;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xgve-console/Console.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xgve-console/Login.jsx
try { (() => {
/* XGVE Console — access / login screen. */
(function () {
  const React = window.React;
  const NS = window.XGVEDesignSystem_c9ef21;
  const {
    Input,
    Button
  } = NS;
  function Login({
    onEnter
  }) {
    const [key, setKey] = React.useState('xg_live_9f2a·b1180');
    const [busy, setBusy] = React.useState(false);
    const submit = e => {
      e.preventDefault();
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        onEnter();
      }, 650);
    };
    return React.createElement('div', {
      style: {
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-canvas)',
        padding: 'var(--space-10)',
        position: 'relative',
        overflow: 'hidden'
      }
    }, [
    // faint broken-ring motif, cropped top-right
    React.createElement('div', {
      key: 'ring',
      'aria-hidden': true,
      style: {
        position: 'absolute',
        top: -140,
        right: -140,
        width: 420,
        height: 420,
        borderRadius: '50%',
        background: 'conic-gradient(var(--accent) 0deg 40deg, transparent 40deg 70deg, var(--border-subtle) 70deg 320deg, transparent 320deg 360deg)',
        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
        mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
        opacity: 0.5
      }
    }), React.createElement('form', {
      key: 'form',
      onSubmit: submit,
      style: {
        position: 'relative',
        width: 380,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-7)'
      }
    }, [React.createElement('img', {
      key: 'logo',
      src: '../../assets/wordmark/xgve-wordmark-transparent.png',
      alt: 'XGVE Studios',
      style: {
        width: 200,
        height: 'auto',
        display: 'block'
      }
    }), React.createElement('div', {
      key: 'head'
    }, [React.createElement('p', {
      key: 'e',
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        margin: '0 0 8px'
      }
    }, 'Console access'), React.createElement('h1', {
      key: 'h',
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-tight)',
        margin: 0
      }
    }, 'Authenticate to continue'), React.createElement('p', {
      key: 'p',
      style: {
        fontSize: 14,
        color: 'var(--content-secondary)',
        lineHeight: 1.5,
        margin: '8px 0 0'
      }
    }, 'Enter your studio access key. Sessions are scoped to the projects you were granted.')]), React.createElement(Input, {
      key: 'k',
      label: 'Access key',
      value: key,
      onChange: e => setKey(e.target.value),
      type: 'text'
    }), React.createElement(Button, {
      key: 'go',
      type: 'submit',
      variant: 'primary',
      fullWidth: true,
      loading: busy,
      iconRight: busy ? null : React.createElement(window.XG_Icons.ArrowRight)
    }, busy ? 'Authenticating' : 'Access console'), React.createElement('div', {
      key: 'status',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: 'var(--tracking-wide)',
        color: 'var(--content-muted)'
      }
    }, [React.createElement('span', {
      key: 'd',
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--xg-fn-positive)'
      }
    }), 'STUDIO ONLINE · 3 GAMES // 12 CLIENT APPS'])])]);
  }
  window.XG_Login = Login;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xgve-console/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/xgve-console/icons.jsx
try { (() => {
/* XGVE Console — shared line-icon set (Lucide geometry, MIT). Exposed on window
   so every screen script shares them. Stroke language matches the hairline rules. */
(function () {
  const React = window.React;
  const S = (props, children) => React.createElement('svg', Object.assign({
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    width: '1em',
    height: '1em'
  }, props), children);
  const P = (d, key) => React.createElement('path', {
    d,
    key
  });
  const L = (x1, y1, x2, y2, key) => React.createElement('line', {
    x1,
    y1,
    x2,
    y2,
    key
  });
  const C = (cx, cy, r, key) => React.createElement('circle', {
    cx,
    cy,
    r,
    key
  });
  const poly = (points, key) => React.createElement('polyline', {
    points,
    key
  });
  const Icons = {
    Grid: () => S({}, [React.createElement('rect', {
      x: 3,
      y: 3,
      width: 7,
      height: 7,
      key: 'a'
    }), React.createElement('rect', {
      x: 14,
      y: 3,
      width: 7,
      height: 7,
      key: 'b'
    }), React.createElement('rect', {
      x: 14,
      y: 14,
      width: 7,
      height: 7,
      key: 'c'
    }), React.createElement('rect', {
      x: 3,
      y: 14,
      width: 7,
      height: 7,
      key: 'd'
    })]),
    Box: () => S({}, [P('M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', 'a'), poly('3.27 6.96 12 12.01 20.73 6.96', 'b'), L(12, 22.08, 12, 12, 'c')]),
    Hammer: () => S({}, [P('M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9', 'a'), P('M17.64 15L22 10.64', 'b'), P('M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h.86c.85 0 1.65.33 2.25.93l1.25 1.25', 'c')]),
    Rocket: () => S({}, [P('M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z', 'a'), P('M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z', 'b'), P('M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0', 'c'), P('M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5', 'd')]),
    Terminal: () => S({}, [poly('4 17 10 11 4 5', 'a'), L(12, 19, 20, 19, 'b')]),
    Search: () => S({}, [C(11, 11, 7, 'a'), L(21, 21, 16.65, 16.65, 'b')]),
    Bell: () => S({}, [P('M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9', 'a'), P('M13.73 21a2 2 0 0 1-3.46 0', 'b')]),
    Settings: () => S({}, [C(12, 12, 3, 'a'), P('M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z', 'b')]),
    Plus: () => S({}, [L(12, 5, 12, 19, 'a'), L(5, 12, 19, 12, 'b')]),
    ArrowRight: () => S({}, [L(5, 12, 19, 12, 'a'), poly('12 5 19 12 12 19', 'b')]),
    ArrowUpRight: () => S({}, [L(7, 17, 17, 7, 'a'), poly('7 7 17 7 17 17', 'b')]),
    ChevronRight: () => S({}, [poly('9 18 15 12 9 6', 'a')]),
    Activity: () => S({}, [poly('22 12 18 12 15 21 9 3 6 12 2 12', 'a')]),
    Cpu: () => S({}, [React.createElement('rect', {
      x: 4,
      y: 4,
      width: 16,
      height: 16,
      rx: 1,
      key: 'a'
    }), React.createElement('rect', {
      x: 9,
      y: 9,
      width: 6,
      height: 6,
      key: 'b'
    }), L(9, 1, 9, 4, 'c'), L(15, 1, 15, 4, 'd'), L(9, 20, 9, 23, 'e'), L(15, 20, 15, 23, 'f'), L(20, 9, 23, 9, 'g'), L(20, 14, 23, 14, 'h'), L(1, 9, 4, 9, 'i'), L(1, 14, 4, 14, 'j')]),
    Zap: () => S({}, [React.createElement('polygon', {
      points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2',
      key: 'a'
    })]),
    LogOut: () => S({}, [P('M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'a'), poly('16 17 21 12 16 7', 'b'), L(21, 12, 9, 12, 'c')]),
    Check: () => S({}, [poly('20 6 9 17 4 12', 'a')])
  };
  window.XG_Icons = Icons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/xgve-console/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
