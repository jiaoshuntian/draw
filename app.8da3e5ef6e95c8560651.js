webpackJsonp([1],{124:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=n.default.div`
  border: #aaa solid 1px;
  margin: 0px 5px 10px 5px;
  width: 150px;
  min-width: 0;

  @media (max-width: 999px) {
    margin: 0px 10px 20px 10px;
  }
`;t.default=o},125:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=n.default.div`
`;t.default=o},126:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=s(127),r=n.default(o.default)`
  justify-content: center;
  font-weight: bold;
`;t.default=r},127:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=n.default.div`
  display: flex;
  align-items: center;

  height: 20px;
  font-size: 13px;
  border: #aaa solid 1px;
  text-align: center;
  margin: -1px -1px -1px -1px;

  text-decoration: none;

  @media (max-width: 999px) {
    font-family: Roboto, sans-serif;
    height: 40px;
    font-size: 24px;
  }
`;t.default=o},128:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=s(344),r=s(345),a=n.default(o.default)`
  background-position: 3px;
  background-size: 16px;
  background-repeat: no-repeat;

  padding-left: 22px;

  @media (max-width: 999px) {
    background-position: 4px;
    background-size: 32px;
    padding-left: 40px;
  }
`,l=n.default(a)`
  ${({country:e})=>e&&`\n    background-image: url('${r(`./${e}.svg`)}');\n  `}
`;t.default=l},129:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=n.default.div`
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */

  width: 50px;
  height: 50px;

  margin: 2px;
  padding: 10px;

  font-size: ${e=>e.selected?.8:0}em;
  font-family: 'Arial Narrow', 'Ubuntu Condensed', sans-serif;
  font-weight: ${e=>e.selected?"bold":""};
  text-align: center;
  text-overflow: ellipsis;
  color: ${e=>e.selected?"white":""};

  background: ${e=>e.selected?"":"radial-gradient(#004, #002, #002)"};
  border-radius: 100%;
  cursor: ${e=>e.noHover?"not-allowed":"pointer"};
  user-select: none;

  &:hover {
    ${({noHover:e})=>!e&&"background: radial-gradient(#ccf, #ccf)"};
  }

  @media (max-width: 999px) {
    width: 85px;
    height: 85px;
    margin: 4px;
    font-size: ${e=>e.selected?1.2:0}em;
  }

  @media (max-width: 850px) {
    flex-flow: row wrap;
    & > * {
      flex: 1;
      flex-basis: 22%;
    }
  }
`;t.default=o},142:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(157),r=s(4),a=s(239),l=s(240);s(621);const i=r.default.div`
  font-family: Arial, sans-serif;
`;o.render(n.createElement(i,null,n.createElement(l.default,null)),document.getElementById("app")),a.attach(document.body)},240:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(64),o=s(3),r=s(114),a=s(131),l=s(117),i=s(291),u=s(611),c=s(612),d=s(613),g=s(72),f=s(619);class p extends o.PureComponent{constructor(){super(...arguments),this.state={key:r(),season:g.default,pots:null,waiting:!1},this.refresh=(()=>{this.setState({key:r()})}),this.getPots=a(e=>n.__awaiter(this,void 0,void 0,function*(){const t=yield d.fetchPots(e);return d.parseGS(t)})),this.onSeasonChange=(e=>n.__awaiter(this,void 0,void 0,function*(){this.setState({waiting:!0});const t=yield this.getPots(e);this.setState({season:e,pots:t,waiting:!1,key:r()})}))}componentDidMount(){this.onSeasonChange(g.default)}render(){const{key:e,pots:t,waiting:s}=this.state;return t?o.createElement(l.BrowserRouter,null,o.createElement("div",null,s&&o.createElement(c.default,null),o.createElement(f.default,{refresh:this.refresh,onSeasonChange:this.onSeasonChange}),o.createElement(l.Switch,null,o.createElement(l.Route,{path:"/cl/gs"},o.createElement(i.default,null)),o.createElement(l.Route,{path:"/cl/last16"},o.createElement(u.default,null)),o.createElement(l.Redirect,{from:"/cl",to:"/cl/gs"}),o.createElement(l.Route,{path:"/"},o.createElement(i.default,{key:e,pots:t}))))):o.createElement(c.default,null)}}t.default=p},291:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(64),o=s(3),r=s(4),a=s(292),l=s(309),i=s(315),u=s(318),c=s(601),d=s(604),g=s(605),f=s(606),p=s(607),v=s(608),m=r.default.div`
  display: flex;
  margin: auto;
  width: 1000px;
  @media (max-width: 999px) {
    width: 100%;
    flex-direction: column;
  }
`;class h extends o.PureComponent{constructor(){super(...arguments),this.reset=(()=>{const e=this.props.pots,t=e.map(e=>a(e)),s=t[0];this.setState({initialPots:e,pots:t,groups:s.map(e=>[]),maxTeamsInGroup:t.length,airborneTeams:[],currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:s,possibleGroups:null,possibleGroupsShuffled:null,completed:!1,error:null})}),this.onTeamBallPick=(e=>{const t=e.target,{groups:s,pots:n,currentPotNum:o}=this.state,r=n[o],i=r.slice(),u=r.findIndex(e=>e.id===t.dataset.teamid),c=r.splice(u,1)[0],d=l.default(n,s,c,o);this.setState({hungPot:i,selectedTeam:c,possibleGroups:d,possibleGroupsShuffled:a(d),pickedGroup:null})}),this.onGroupBallPicked=(e=>{const t=+(e.target.dataset.group||0),{groups:s,airborneTeams:o,selectedTeam:r,pots:a,currentPotNum:l}=this.state;if(!r)return void this.setState({error:"shit"});s[t].push(r);const i=a[l].length>0?l:l+1;o.push(r);const u=this.animateCell(t);this.setState({selectedTeam:null,pickedGroup:t,hungPot:a[i],possibleGroups:null,possibleGroupsShuffled:null,currentPotNum:i,completed:i>=a.length,airborneTeams:o},()=>n.__awaiter(this,void 0,void 0,function*(){const e=this.state.airborneTeams.filter(e=>e!==r);yield u,this.setState({airborneTeams:e})}))})}componentDidMount(){this.reset()}animateCell(e){const{selectedTeam:t,currentPotNum:s}=this.state;if(!t)return;const n=document.querySelector(`[data-cellid='${t.id}']`),o=`[data-cellid='${String.fromCharCode(65+e)}${s}']`,r=document.querySelector(o);return n instanceof HTMLElement&&r instanceof HTMLElement?i.default(n,r,350):void 0}render(){if(!this.state)return null;const{initialPots:e,pots:t,groups:s,maxTeamsInGroup:n,currentPotNum:r,hungPot:a,airborneTeams:l,selectedTeam:i,pickedGroup:h,possibleGroups:b,possibleGroupsShuffled:x,completed:y}=this.state;return o.createElement(m,null,o.createElement(d.default,null,o.createElement(u.default,{selectedTeam:i,initialPots:e,pots:t,currentPotNum:r}),o.createElement(c.default,{maxTeams:n,selectedTeam:i,currentPotNum:r,groups:s,possibleGroups:b,airborneTeams:l})),o.createElement(g.default,null,o.createElement(f.default,{completed:y,selectedTeam:i,pot:a,onPick:this.onTeamBallPick}),o.createElement(v.default,{completed:y,selectedTeam:i,pickedGroup:h,possibleGroups:b,numGroups:s.length,reset:this.reset}),o.createElement(p.default,{completed:y,possibleGroups:x,onPick:this.onGroupBallPicked})))}}t.default=h},309:function(e,t,s){"use strict";function n(e,t,s){if(0===e[s].length&&++s===e.length)return!0;const r=e[s],a=r.pop();let l=!1;for(const r of o(t,a,s)){const o=t[r];if(o.push(a),l=n(e,t,s),o.pop(),l)break}return r.push(a),l}function o(e,t,s){const n=r(e,t,s,0,e.length>>1),o=r(e,t,s,e.length>>1,e.length);return 0===n.length?o:0===o.length?n:n.concat(o)}function r(e,t,s,n,o){const r=[],a=l(t);for(let l=n;l<o;++l){const n=e[l];let o=!0;for(const e of n)if(e.country===t.country||a(e)){if(o=!1,e.pairing===t)return[];break}o&&n.length<=s&&r.push(l)}return r}Object.defineProperty(t,"__esModule",{value:!0});const a=s(44);t.default=((e,t,s,r)=>t.every(e=>0===e.length)?a(t.length):o(t,s,r).filter(o=>{t[o].push(s);const a=n(e,t,r);return t[o].pop(),a}));const l=e=>"ru"===e.country?e=>"ua"===e.country:"ua"===e.country?e=>"ru"===e.country:e=>!1},315:function(e,t,s){"use strict";function n(e,{left:t,top:s}){const n=t+a,o=s+l;e.style.transform=`translate3d(${n}px, ${o}px, 0px)`}function o(e){const{width:t,fontFamily:s}=getComputedStyle(e),o=e.cloneNode(!0);o.classList.add(u);const{style:r}=o;return r.width=t,r.fontFamily=s,o.textContent=e.textContent,n(o,e.getBoundingClientRect()),o}Object.defineProperty(t,"__esModule",{value:!0});const r=s(316),a=2,l=2,i=r.default`
  position: absolute;
  z-index: 1000;
`,u=r.default`
  color: initial !important;
  position: absolute !important;
  border: initial !important;
  user-select: none !important;
`,c=document.createElement("div");c.classList.add(i),document.body.insertBefore(c,document.getElementById("app")),t.default=((e,t,s)=>{const r=o(e);c.appendChild(r);const a=t.getBoundingClientRect();return r.style.transition=`transform ${s}ms ease-in-out`,n(r,a),new Promise(e=>{r.addEventListener("transitionend",t=>{e(),setTimeout(()=>{c.removeChild(r)},0)})})})},316:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(317),o=()=>`styled-element-${Math.random().toString(36).slice(2)}`;let r;const a=(e,...t)=>e.reduce((e,s,o)=>`${e}${s}${n(t[o])?"":t[o]}`,"");t.default=((e,...t)=>{r||(r=document.createElement("style"),document.head.appendChild(r));const s=o(),n=a(e,...t);return r.textContent+=`.${s}{${n}}`,s})},318:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(123),a=s(339),l=o.default.div`
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`;class i extends n.PureComponent{getPickedTeams(){const{currentPotNum:e,pots:t,initialPots:s,selectedTeam:n}=this.props;return r(s[e],t[e],[n])}render(){const{initialPots:e,selectedTeam:t,currentPotNum:s}=this.props;return n.createElement(l,null,e&&e.map((e,o)=>{const r=o===s,l=r?this.getPickedTeams():o<s?e:[];return n.createElement(a.default,{key:e[0].id,potNum:o,isCurrent:r,teams:e,pickedTeams:l,selectedTeam:t})}))}}t.default=i},339:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(81),a=s(124),l=s(125),i=s(342),u=s(343),c=o.default(a.default)`
  transform: box-shadow 1s linear;
  ${e=>e.highlighted&&`\n  `}
`;t.default=(({isCurrent:e,potNum:t,teams:s,pickedTeams:o,selectedTeam:a})=>n.createElement(c,{highlighted:e},n.createElement(i.default,{highlighted:e,depleted:!s||o.length===s.length},"Pot ",t+1),n.createElement(l.default,null,s&&s.map(e=>{const{name:t,country:s,shortName:l}=e,i=e instanceof r.GSTeam?e.pairing:null;return n.createElement(u.default,{key:e.id,"data-cellId":e.id,title:i&&`paired with ${i.name}`,selected:e===a,picked:o.includes(e),country:s},l||t)}))))},340:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(71);class o extends n.default{constructor(e,t,s,n,o){super(e,t,n),this.coefficient=s,this.pairing=o}}t.default=o},341:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(71);class o extends n.default{constructor(e,t,s){super(e,t),this.group=s}}t.default=o},342:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=s(126),r=n.default(o.default)`
  ${e=>e.depleted&&`\n    filter: grayscale(0.5);\n    opacity: 0.4;\n  `}
  ${e=>e.highlighted&&`\n    color: #f70;\n  `}
`;t.default=r},343:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=s(128),r=n.default(o.default)`
  ${e=>e.selected&&"color: blue;"}
  ${e=>e.picked&&`\n    filter: grayscale(0.5);\n    opacity: 0.4;\n  `}
`;t.default=r},344:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=s(127),r=n.default(o.default)`
  padding-left: 3px;
  padding-right: 3px;
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 999px) {
    font-family: 'Roboto Condensed', RobotoCondensed, RobotoCondensed-Regular, sans-serif;
  }
`;t.default=r},345:function(e,t,s){function n(e){return s(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./ad.svg":346,"./ae.svg":347,"./af.svg":348,"./ag.svg":349,"./ai.svg":350,"./al.svg":351,"./am.svg":352,"./ao.svg":353,"./aq.svg":354,"./ar.svg":355,"./as.svg":356,"./at.svg":357,"./au.svg":358,"./aw.svg":359,"./ax.svg":360,"./az.svg":361,"./ba.svg":362,"./bb.svg":363,"./bd.svg":364,"./be.svg":365,"./bf.svg":366,"./bg.svg":367,"./bh.svg":368,"./bi.svg":369,"./bj.svg":370,"./bl.svg":371,"./bm.svg":372,"./bn.svg":373,"./bo.svg":374,"./bq.svg":375,"./br.svg":376,"./bs.svg":377,"./bt.svg":378,"./bv.svg":379,"./bw.svg":380,"./by.svg":381,"./bz.svg":382,"./ca.svg":383,"./cc.svg":384,"./cd.svg":385,"./cf.svg":386,"./cg.svg":387,"./ch.svg":388,"./ci.svg":389,"./ck.svg":390,"./cl.svg":391,"./cm.svg":392,"./cn.svg":393,"./co.svg":394,"./cr.svg":395,"./cu.svg":396,"./cv.svg":397,"./cw.svg":398,"./cx.svg":399,"./cy.svg":400,"./cz.svg":401,"./de.svg":402,"./dj.svg":403,"./dk.svg":404,"./dm.svg":405,"./do.svg":406,"./dz.svg":407,"./ec.svg":408,"./ee.svg":409,"./eg.svg":410,"./eh.svg":411,"./er.svg":412,"./es.svg":413,"./et.svg":414,"./eu.svg":415,"./fi.svg":416,"./fj.svg":417,"./fk.svg":418,"./fm.svg":419,"./fo.svg":420,"./fr.svg":421,"./ga.svg":422,"./gb-eng.svg":423,"./gb-nir.svg":424,"./gb-sct.svg":425,"./gb-wls.svg":426,"./gb.svg":427,"./gd.svg":428,"./ge.svg":429,"./gf.svg":430,"./gg.svg":431,"./gh.svg":432,"./gi.svg":433,"./gl.svg":434,"./gm.svg":435,"./gn.svg":436,"./gp.svg":437,"./gq.svg":438,"./gr.svg":439,"./gs.svg":440,"./gt.svg":441,"./gu.svg":442,"./gw.svg":443,"./gy.svg":444,"./hk.svg":445,"./hm.svg":446,"./hn.svg":447,"./hr.svg":448,"./ht.svg":449,"./hu.svg":450,"./id.svg":451,"./ie.svg":452,"./il.svg":453,"./im.svg":454,"./in.svg":455,"./io.svg":456,"./iq.svg":457,"./ir.svg":458,"./is.svg":459,"./it.svg":460,"./je.svg":461,"./jm.svg":462,"./jo.svg":463,"./jp.svg":464,"./ke.svg":465,"./kg.svg":466,"./kh.svg":467,"./ki.svg":468,"./km.svg":469,"./kn.svg":470,"./kp.svg":471,"./kr.svg":472,"./kw.svg":473,"./ky.svg":474,"./kz.svg":475,"./la.svg":476,"./lb.svg":477,"./lc.svg":478,"./li.svg":479,"./lk.svg":480,"./lr.svg":481,"./ls.svg":482,"./lt.svg":483,"./lu.svg":484,"./lv.svg":485,"./ly.svg":486,"./ma.svg":487,"./mc.svg":488,"./md.svg":489,"./me.svg":490,"./mf.svg":491,"./mg.svg":492,"./mh.svg":493,"./mk.svg":494,"./ml.svg":495,"./mm.svg":496,"./mn.svg":497,"./mo.svg":498,"./mp.svg":499,"./mq.svg":500,"./mr.svg":501,"./ms.svg":502,"./mt.svg":503,"./mu.svg":504,"./mv.svg":505,"./mw.svg":506,"./mx.svg":507,"./my.svg":508,"./mz.svg":509,"./na.svg":510,"./nc.svg":511,"./ne.svg":512,"./nf.svg":513,"./ng.svg":514,"./ni.svg":515,"./nl.svg":516,"./no.svg":517,"./np.svg":518,"./nr.svg":519,"./nu.svg":520,"./nz.svg":521,"./om.svg":522,"./pa.svg":523,"./pe.svg":524,"./pf.svg":525,"./pg.svg":526,"./ph.svg":527,"./pk.svg":528,"./pl.svg":529,"./pm.svg":530,"./pn.svg":531,"./pr.svg":532,"./ps.svg":533,"./pt.svg":534,"./pw.svg":535,"./py.svg":536,"./qa.svg":537,"./re.svg":538,"./ro.svg":539,"./rs.svg":540,"./ru.svg":541,"./rw.svg":542,"./sa.svg":543,"./sb.svg":544,"./sc.svg":545,"./sd.svg":546,"./se.svg":547,"./sg.svg":548,"./sh.svg":549,"./si.svg":550,"./sj.svg":551,"./sk.svg":552,"./sl.svg":553,"./sm.svg":554,"./sn.svg":555,"./so.svg":556,"./sr.svg":557,"./ss.svg":558,"./st.svg":559,"./sv.svg":560,"./sx.svg":561,"./sy.svg":562,"./sz.svg":563,"./tc.svg":564,"./td.svg":565,"./tf.svg":566,"./tg.svg":567,"./th.svg":568,"./tj.svg":569,"./tk.svg":570,"./tl.svg":571,"./tm.svg":572,"./tn.svg":573,"./to.svg":574,"./tr.svg":575,"./tt.svg":576,"./tv.svg":577,"./tw.svg":578,"./tz.svg":579,"./ua.svg":580,"./ug.svg":581,"./um.svg":582,"./un.svg":583,"./us.svg":584,"./uy.svg":585,"./uz.svg":586,"./va.svg":587,"./vc.svg":588,"./ve.svg":589,"./vg.svg":590,"./vi.svg":591,"./vn.svg":592,"./vu.svg":593,"./wf.svg":594,"./ws.svg":595,"./ye.svg":596,"./yt.svg":597,"./za.svg":598,"./zm.svg":599,"./zw.svg":600};n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=345},601:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(602),a=o.default.div`
  display: flex;
  flex-flow: row wrap;
  & > * {
    flex: 1;
    flex-basis: 22%;
  }
  & > :nth-child(-n + ${({numGroups:e})=>e?e>>1:0}) {
    background-color: #fee;
  }
  & > :nth-child(n + ${({numGroups:e})=>e?1+(e>>1):0}) {
    background-color: #eef;
  }
`;t.default=(({maxTeams:e,currentPotNum:t,groups:s,possibleGroups:o,selectedTeam:l,airborneTeams:i})=>n.createElement(a,{numGroups:s.length},s&&s.map((s,a)=>n.createElement(r.default,{maxTeams:e,groupLetter:String.fromCharCode(65+a),teams:s,potNum:t,possible:null!==o&&o.includes(a),airborneTeams:i}))))},602:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(123),r=s(44),a=s(124),l=s(126),i=s(125),u=s(603);t.default=(({maxTeams:e,groupLetter:t,teams:s,potNum:c,possible:d,airborneTeams:g})=>{const f=o(s,g);return n.createElement(a.default,null,n.createElement(l.default,null,"Group ",t),n.createElement(i.default,null,f.map((e,t)=>n.createElement(u.default,{country:e.country,picked:!0},e.shortName||e.name)),r(f.length,e).map(e=>n.createElement(u.default,{possible:e===c&&d,"data-cellid":`${t}${e}`}))))})},603:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=s(128),r=n.keyframes`
  from {
    background-color: white;
    box-shadow: 0 0 20px #bcd;
  }
  to {}
`,a=n.keyframes`
  from {
    background-color: #ff8;
  }
  to {}
`,l=n.default(o.default)`
  ${e=>e.possible&&`\n    background-color: rgba(255, 255, 255, 0.75);\n    animation: ${r} 1s ease;\n    border-style: double;\n    border-color: #789;\n  `}
  ${e=>e.picked&&`\n    animation: ${a} 5s normal forwards;\n  `}
`;t.default=l},604:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=n.default.div`
  display: flex;
  flex-direction: column;
  min-width: 65%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    width: 100%;
    margin: 0px 10px 20px 10px;
  }
`;t.default=o},605:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4);t.default=n.default.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 35%;
  margin: 0px 5px 10px 5px;

  @media (max-width: 999px) {
    width: 100%;
    align-items: center;
    margin: 0px 10px 20px 10px;
  }
`},606:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(129),a=o.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`,l=o.default(r.default)`
  background: ${({selected:e,notSelected:t})=>e?"#004":t?"#ddd":"radial-gradient(#fff, #004)"};
`;t.default=(({completed:e,pot:t,selectedTeam:s,onPick:o})=>n.createElement(a,null,!e&&t&&t.map((e,t)=>n.createElement(l,{key:e.id,"data-teamid":e.id,selected:e===s,notSelected:s&&e!==s,noHover:s,onClick:!s&&o},e.name))))},607:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(129),a=o.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;t.default=(({completed:e,possibleGroups:t,onPick:s})=>n.createElement(a,null,!e&&t&&t.map(e=>n.createElement(r.default,{"data-group":e,onClick:s},String.fromCharCode(65+e)))))},608:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(609),a=o.default.div`
  width: 100%;
  font-size: 1.25em;
  line-height: 150%;
  vertical-align: middle;

  margin-top: 30px;
  margin-bottom: 30px;

  user-select: none;

  @media (max-width: 999px) {
    font-size: 2.5em;
  }
`,l=o.default.span`
  display: inline-block;
`,i=o.default.span`
  font-weight: bold;
`,u=o.default.div`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`,c=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.default=(({completed:e,selectedTeam:t,pickedGroup:s,possibleGroups:o,numGroups:d,reset:g})=>n.createElement(a,null,e?n.createElement(c,null,n.createElement("div",null,"Draw completed!"),n.createElement(u,{onClick:g},"Restart")):t&&o?n.createElement("div",null,"Possible groups for ",n.createElement(l,null,n.createElement(i,null,t.name),":"),n.createElement(r.default,{numGroups:d,possibleGroups:o})):null!==s?`Group ${String.fromCharCode(65+s)}!`:"Pick a ball"))},609:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(44),a=s(610),l=o.default.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
`;t.default=(({numGroups:e,possibleGroups:t})=>n.createElement(l,null,r(e).map(e=>n.createElement(a.default,{color:e<4?"red":"blue",possible:t.includes(e)},String.fromCharCode(65+e)))))},610:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(4),o=n.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  margin: 2px;

  border-width: 1px;
  border-style: solid;
  border-radius: 100%;

  font-size: 18px;

  ${e=>e.possible?`\n    color: ${e.color};\n  `:`\n    color: #000;\n    border-color: rgba(0,0,0,0);\n    filter: opacity(0.25);\n  `}

  @media (max-width: 999px) {
    width: 45px;
    height: 45px;
    border-width: 2px;
    font-size: 30px;
  }
`;t.default=o},611:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3);class o extends n.PureComponent{render(){return n.createElement("div",null,"Not available yet")}}t.default=o},612:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=o.default.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
`,a=o.default(r)`
  background-color: white;
  opacity: 0.75;
  animation: ${o.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.75;
  }
`} 0.1s ease-out;
`,l=o.default(r)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  color: #808080;
  user-select: none;
`;t.default=(()=>n.createElement("div",null,n.createElement(a,null),n.createElement(l,null,"wait...")))},613:function(e,t,s){"use strict";function n(e){return d.__awaiter(this,void 0,void 0,function*(){const t=yield fetch(w(e,"latin1"));if(200!==t.status)throw new Error(`${e}: 404`);const s=yield t.text();if(s.includes("<title>404 Not Found</title>"))throw new Error(`${e}: 404`);return s})}function o(e){return d.__awaiter(this,void 0,void 0,function*(){for(const t of e)try{const e=yield n(t);return e}catch(e){console.error(e)}throw new Error(`could not load urls ${e.join(", ")}`)})}function r(e){return d.__awaiter(this,void 0,void 0,function*(){const t=[x(e),y(e)];return e!==f.default&&t.reverse(),yield o(t)})}function a(e){return d.__awaiter(this,void 0,void 0,function*(){return c(u(yield i(e)))})}function l(e){e=e.slice(e.lastIndexOf("--------------"));const t=[[],[]],s=/\s*(.+?)(\s\*+\d?|\([CE]L-TH\)?\s+)?\s{2,}(\w{3})\s+/g;let n;for(let o=0;o<16&&null!==(n=s.exec(e));++o)t[o%2].push(new h.Last16Team(n[1],n[3],o>>1));return t}function i(e){return d.__awaiter(this,void 0,void 0,function*(){const t=/\s*(.+?)\s*(\*+\d?|\(([CE]L-)?TH\))?\s+(\w{3})\s+(\d{1,3}\.\d{3})/g;e=e.slice(e.indexOf("Pot 1"));const s=[];let n;for(;null!==(n=t.exec(e));){const e=p.default[n[4].toLowerCase()],t=b&&(yield b).default(n[1],e)||void 0,o=+n[5];s.push(new h.GSTeam(n[1],e,o,t))}return s})}function u(e){const t=e.slice();for(const[e,s]of v){const n=k(t,e),o=k(t,s);if(n&&o){if(n.country!==o.country)throw new Error(`teams ${n.name} & ${o.name} cannot be paired up`);n.pairing=o,o.pairing=n,m.default(t,n),m.default(t,o)}}t.sort((e,t)=>t.coefficient-e.coefficient);const s=t.length,n=s-1;for(let e=0;e<n;++e){const n=t[e];if(!n.pairing)for(let o=e+1;o<s;++o){const e=t[o];if(!e.pairing&&n.country===e.country){n.pairing=e,e.pairing=n;break}}}return e}function c(e){const t=[[],[],[],[]];for(let s=0;s<e.length;++s)t[s>>4<<1|s%2].push(e[s]);return t}Object.defineProperty(t,"__esModule",{value:!0});const d=s(64),g=s(614),f=s(72),p=s(615),v=s(616),m=s(617),h=s(81),b=g.mobile&&s.e(0).then(s.bind(null,626)),x=e=>`http://kassiesa.home.xs4all.nl/bert/uefa/seedcl${e}.html`,y=e=>`https://kassiesa.home.xs4all.nl/bert/uefa/history/seedcl${e}.html`,w=(e,t)=>`https://proxy-antonv.rhcloud.com/?url=${encodeURIComponent(e)}${t?`&encoding=${t}`:""}`;t.tryFetch=n,t.tryMultipleUrls=o,t.default=((e,t=!0)=>r(f.default).then(t?a:l)),t.fetchPots=r,t.parseGS=a,t.parseLast16Teams=l;const k=(e,t)=>e.find(e=>e.name.includes(t))},615:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={eng:"gb-eng",esp:"es",ita:"it",ger:"de",fra:"fr",por:"pt",rus:"ru",ukr:"ua",gre:"gr",tur:"tr",cyp:"cy",den:"dk",bul:"bg",swe:"se",cro:"hr",srb:"rs",nor:"no",bls:"by",bel:"be",aut:"at",fin:"fi",isl:"is",mon:"me",alb:"al",sma:"sm",and:"ad",gib:"gi",rom:"ro",mol:"md",azb:"az",geo:"ge",arm:"am",mac:"mk",slo:"si",svk:"sk",cze:"cz",pol:"pl",ned:"nl",lux:"lu",kaz:"kz",est:"ee",lat:"lv",ltu:"lt",far:"fo",lie:"li",sui:"ch",sco:"gb-sct",nir:"gb-nir",ire:"ie",wal:"gb-wls",hun:"hu",bos:"ba",mlt:"mt",isr:"il"}},616:function(e,t){e.exports=[["Real Madrid","Barcelona"],["Real Madrid","Atlético"],["Manchester City","Manchester United"],["Chelsea","Arsenal"],["Chelsea","Tottenham"],["Arsenal","Tottenham"],["Milan","Inter"],["Benfica","Porto"],["Benfica","Sporting"],["CSKA","Spartak"],["CSKA","Zenit"],["Zenit","Spartak"],["Shakhtar","Dinamo Kiev"],["Olympiakos","Panathinaikos"]]},617:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(618);t.default=((e,t)=>{const s=e.indexOf(t);-1!==s&&(e[s]=n(e),e.pop())})},619:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(4),r=s(117),a=s(620),l=location.pathname,i=o.default.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 16px;

  @media (max-width: 999px) {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 32px;
  }
`,u=o.default(r.Link)`
  margin-left: 5px;
  margin-right: 5px;
`,c=o.default.a`
  margin-left: 5px;
  margin-right: 5px;
`,d=()=>n.createElement(c,{className:"github-button",href:"https://github.com/inker/draw","data-icon":"octicon-star","data-count-href":"/inker/draw/stargazers","data-count-api":"/repos/inker/draw#stargazers_count","data-count-aria-label":"# stargazers on GitHub","aria-label":"Star inker/draw on GitHub"},"Star me on GitHub");t.default=(e=>n.createElement(i,null,n.createElement(a.default,{start:2003,onChange:t=>e.onSeasonChange(+t.target.value)}),n.createElement(u,{to:l,onClick:e.refresh},"Restart")," |",n.createElement(d,null)))},620:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(3),o=s(44),r=s(72),a=e=>`${e}/${((e+1)%100).toString().padStart(2,"0")}`;class l extends n.PureComponent{render(){const{start:e,onChange:t}=this.props;return n.createElement("select",{className:"needsclick",onChange:t,defaultValue:r.default},o(r.default,e-1).map(e=>n.createElement("option",{value:e},a(e))))}}t.default=l},71:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=s(114);class o{constructor(e,t,s){this.id=n("team-"),this.name=e,this.country=t,this.shortName=s}}t.default=o},72:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=new Date,o=n.getFullYear(),r=n.getMonth();t.default=r<5?o-1:o},81:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(71);t.Team=n.default;var o=s(340);t.GSTeam=o.default;var r=s(341);t.Last16Team=r.default}},[142]);