(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const i=s(89),{createProgressiveTraceGenerator:o}=s(863),{lightningChart:a,AutoCursorModes:l,UIElementBuilders:n,UILayoutBuilders:r,UIOrigins:d,Themes:u}=i,c=a().ChartXY({theme:u[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setAutoCursorMode(l.disabled).setTitle("Custom Cursor using LCJS UI");c.getDefaultAxisY().setTitle("Y-axis");const g=new Array(3).fill(0).map(((e,t)=>c.addLineSeries({dataPattern:{pattern:"ProgressiveX"}})));Promise.all(g.map((e=>o().setNumberOfPoints(200).generate().toPromise().then((t=>{e.add(t)}))))).then((()=>{c.forEachAxis((e=>e.fit(!1))),requestAnimationFrame((()=>{S({clientX:.4*window.innerWidth,clientY:window.innerHeight/2})}))})),c.addLegendBox().add(c);const m=c.addUIElement(r.Column,{x:c.getDefaultAxisX(),y:c.getDefaultAxisY()}).setMouseInteractions(!1).setOrigin(d.LeftBottom).setMargin(5).setBackground((e=>e.setFillStyle(c.getTheme().cursorResultTableFillStyle).setStrokeStyle(c.getTheme().cursorResultTableStrokeStyle))),x=m.addElement(r.Row).addElement(n.TextBox),b=g.map(((e,t)=>m.addElement(r.Row).addElement(n.TextBox).setTextFillStyle(g[t].getStrokeStyle().getFillStyle()))),h=c.getDefaultAxisX().addCustomTick(n.PointableTextBox).setAllocatesAxisSpace(!1),f=g.map(((e,t)=>c.getDefaultAxisY().addCustomTick(n.PointableTextBox).setAllocatesAxisSpace(!1).setMarker((e=>e.setTextFillStyle(g[t].getStrokeStyle().getFillStyle())))));m.setVisible(!1),h.setVisible(!1),f.forEach((e=>e.setVisible(!1)));const S=e=>{const t=c.translateCoordinate(e,c.coordsAxis),s=g.map((t=>t.solveNearestFromScreen(e))),i=s.reduce(((e,s,i)=>e?s&&Math.abs(t.y-s.location.y)<Math.abs(t.y-e.location.y)?s:e:s));i?(m.setPosition({x:i.location.x,y:i.location.y}),i.location.x>c.getDefaultAxisX().getInterval().end/1.5?i.location.y>c.getDefaultAxisY().getInterval().end/1.5?m.setOrigin(d.RightTop):m.setOrigin(d.RightBottom):i.location.y>c.getDefaultAxisY().getInterval().end/1.5?m.setOrigin(d.LeftTop):m.setOrigin(d.LeftBottom),x.setText(`X: ${c.getDefaultAxisX().formatValue(i.location.x)}`),b.map(((e,t)=>{e.setText(`Y${t}: ${c.getDefaultAxisY().formatValue(s[t].location.y)}`)})),h.setValue(i.location.x),f.forEach(((e,t)=>{e.setValue(s[t].location.y||0)})),m.setVisible(!0),h.setVisible(!0),f.map((e=>e.setVisible(!0)))):(m.setVisible(!1),h.setVisible(!1),f.map((e=>e.setVisible(!1))))},y=(e,t)=>{S(t)};c.onSeriesBackgroundMouseMove(y),g.forEach((e=>{e.onMouseMove(y)})),c.onSeriesBackgroundMouseLeave(((e,t)=>{m.setVisible(!1),h.setVisible(!1),f.map((e=>e.setVisible(!1)))})),c.onSeriesBackgroundMouseDragStart(((e,t)=>{m.setVisible(!1),h.setVisible(!1),f.map((e=>e.setVisible(!1)))}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);