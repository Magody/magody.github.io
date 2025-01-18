"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{38615:(t,e,i)=>{i.d(e,{FW:()=>E,L7:()=>A,Tu:()=>T,VS:()=>R,tL:()=>k});var s=i(40068),r=i(5717),n=i(23279),l=i(42389),a=i(51884),u=i(61022),o=i(33651),h=i(22662),c=i(95825),p=i(96253),g=i(34158),d=i(12809),I=i(98505),z=i(13933);function k(t,e,i,s){if(Array.isArray(t)){if(null!=e||null!=i)throw new o.Qp("When inputs is an array, neither initialState or constants should be provided");null!=s&&(i=t.slice(t.length-s,t.length),t=t.slice(0,t.length-s)),t.length>1&&(e=t.slice(1,t.length)),t=t[0]}function r(t){return null==t||Array.isArray(t)?t:[t]}return{inputs:t,initialState:e=r(e),constants:i=r(i)}}function A(t,e,i,r=!1,n,l,a=!1,u=!1){return s.DZQ(()=>{let h,c,p;let d=e.shape.length;if(d<3)throw new o.Qp(`Input should be at least 3D, but is ${d}D.`);let I=[1,0].concat(g.y1(2,d));if(e=s.mgz(e,I),null!=l)throw new o.EH("The rnn() functoin of the deeplearn.js backend does not support constants yet.");a&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),null!=n&&((n=s.wgE(s.wgE(n,"bool"),"float32")).rank===d-1&&(n=s.UG6(n,-1)),n=s.mgz(n,I)),r&&(e=s.BEg(e,0),null!=n&&(n=s.BEg(n,0)));let z=[],k=i,A=e.shape[0],R=s.K$i(e);null!=n&&(c=s.K$i(n));for(let e=0;e<A;++e){let i=R[e],r=s.DZQ(()=>t(i,k));if(null==n)h=r[0],k=r[1];else{let t=s.DZQ(()=>{let t=c[e],i=s.jbE(s.P61(t),t);return{output:s.WQq(s.lKK(r[0],t),s.lKK(k[0],i)),newStates:k.map((e,n)=>s.WQq(s.lKK(r[1][n],t),s.lKK(e,i)))}});h=t.output,k=t.newStates}u&&z.push(h)}return u&&(p=s.t$z(z,1)),[h,p,k]})}class R extends u.Wd{constructor(t){let e;if(super(t),null==t.cell)throw new o.Qp("cell property is missing for the constructor of RNN.");if(null==(e=Array.isArray(t.cell)?new N({cells:t.cell}):t.cell).stateSize)throw new o.Qp("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=e,this.returnSequences=null!=t.returnSequences&&t.returnSequences,this.returnState=null!=t.returnState&&t.returnState,this.goBackwards=null!=t.goBackwards&&t.goBackwards,this._stateful=null!=t.stateful&&t.stateful,this.unroll=null!=t.unroll&&t.unroll,this.supportsMasking=!0,this.inputSpec=[new u.eO({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(null!=this.states_)return this.states_;{let t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return g.y1(0,t).map(t=>null)}}setStates(t){this.states_=t}computeOutputShape(t){let e;(0,d.TT)(t)&&(t=t[0]);let i=this.cell.stateSize;Array.isArray(i)||(i=[i]);let s=i[0];if(e=this.returnSequences?[t[0],t[1],s]:[t[0],s],!this.returnState)return e;{let s=[];for(let e of i)s.push([t[0],e]);return[e].concat(s)}}computeMask(t,e){return s.DZQ(()=>{Array.isArray(e)&&(e=e[0]);let t=this.returnSequences?e:null;return this.returnState?[t].concat(this.states.map(t=>null)):t})}get states(){if(null!=this.states_)return this.states_;{let t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,e=[];for(let i=0;i<t;++i)e.push(null);return e}}set states(t){this.states_=t}build(t){let e;if(null!=this.numConstants)throw new o.EH("Constants support is not implemented in RNN yet.");(0,d.TT)(t)&&(t=t[0]);let i=this.stateful?t[0]:null,r=t.slice(2);this.inputSpec[0]=new u.eO({shape:[i,null,...r]});let n=[t[0]].concat(t.slice(2));if(this.cell.build(n),e=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],null!=this.stateSpec){if(!s.ZSL.arraysEqual(this.stateSpec.map(t=>t.shape[t.shape.length-1]),e))throw new o.Qp(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=e.map(t=>new u.eO({shape:[null,t]}));this.stateful&&this.resetStates()}resetStates(t,e=!1){(0,s.DZQ)(()=>{if(!this.stateful)throw new o.l7("Cannot call resetStates() on an RNN Layer that is not stateful.");let i=this.inputSpec[0].shape[0];if(null==i)throw new o.Qp("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(null==this.states_)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(t=>s.Ul9([i,t])):this.states_=[s.Ul9([i,this.cell.stateSize])];else if(null==t)s.ASo(this.states_),null!=this.keptStates&&(s.ASo(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(t=>s.Ul9([i,t])):this.states_[0]=s.Ul9([i,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new o.Qp(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);!0===e?this.keptStates.push(this.states_.slice()):s.ASo(this.states_);for(let e=0;e<this.states_.length;++e){let r=t[e],n=[i,Array.isArray(this.cell.stateSize)?this.cell.stateSize[e]:this.cell.stateSize];if(!s.ZSL.arraysEqual(r.shape,n))throw new o.Qp(`State ${e} is incompatible with layer ${this.name}: expected shape=${n}, received shape=${r.shape}`);this.states_[e]=r}}this.states_=this.states_.map(t=>s.aCs(t.clone()))})}apply(t,e){let i=null==e?null:e.initialState,s=null==e?null:e.constants;null==e&&(e={});let r=k(t,i,s,this.numConstants);t=r.inputs,i=r.initialState,s=r.constants;let n=[],l=[];if(null!=i){for(let t of(e.initialState=i,n=n.concat(i),this.stateSpec=[],i))this.stateSpec.push(new u.eO({shape:t.shape}));l=l.concat(this.stateSpec)}if(null!=s&&(e.constants=s,n=n.concat(s),this.numConstants=s.length),!(n[0]instanceof u.Ar))return super.apply(t,e);{let i=[t].concat(n),s=this.inputSpec.concat(l),r=this.inputSpec;this.inputSpec=s;let a=super.apply(i,e);return this.inputSpec=r,a}}call(t,e){return(0,s.DZQ)(()=>{let i=null==e?null:e.mask,s=null==e?null:e.training,r=null==e?null:e.initialState;t=(0,d.un)(t),null==r&&(r=this.stateful?this.states_:this.getInitialState(t));let n=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(r.length!==n)throw new o.Qp(`RNN Layer has ${n} state(s) but was passed ${r.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");let l={training:s},a=A((t,e)=>{let i=this.cell.call([t].concat(e),l);return[i[0],i.slice(1)]},t,r,this.goBackwards,i,null,this.unroll,this.returnSequences),u=a[0],h=a[1],c=a[2];this.stateful&&this.resetStates(c,s);let p=this.returnSequences?h:u;return this.returnState?[p].concat(c):p})}getInitialState(t){return(0,s.DZQ)(()=>{let e=s.Ul9(t.shape);return(e=s.czq(e,[1,2]),e=n.UG(e),Array.isArray(this.cell.stateSize))?this.cell.stateSize.map(t=>t>1?n.Vs(e,[1,t]):e):this.cell.stateSize>1?[n.Vs(e,[1,this.cell.stateSize])]:[e]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),null!=this.cell&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){let t=super.getConfig(),e={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};null!=this.numConstants&&(e.numConstants=this.numConstants);let i=this.cell.getConfig();return this.getClassName()===R.className&&(e.cell={className:this.cell.getClassName(),config:i}),Object.assign(Object.assign(Object.assign({},i),t),e)}static fromConfig(t,e,i={}){let s=e.cell;return new t(Object.assign(e,{cell:(0,z.i)(s,i)}))}}R.className="RNN",s.JFn.registerClass(R);class S extends u.Wd{}class b extends S{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,(0,p.oo)(this.units,"units"),this.activation=(0,r.b_)(null==t.activation?this.DEFAULT_ACTIVATION:t.activation),this.useBias=null==t.useBias||t.useBias,this.kernelInitializer=(0,h.Fe)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=(0,h.Fe)(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=(0,h.Fe)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=(0,c.Bm)(t.kernelRegularizer),this.recurrentRegularizer=(0,c.Bm)(t.recurrentRegularizer),this.biasRegularizer=(0,c.Bm)(t.biasRegularizer),this.kernelConstraint=(0,a.YZ)(t.kernelConstraint),this.recurrentConstraint=(0,a.YZ)(t.recurrentConstraint),this.biasConstraint=(0,a.YZ)(t.biasConstraint),this.dropout=g.jk([1,g.T9([0,null==t.dropout?0:t.dropout])]),this.recurrentDropout=g.jk([1,g.T9([0,null==t.recurrentDropout?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=(0,d.U$)(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,s.DZQ)(()=>{let i;if(2!==t.length)throw new o.Qp(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let r=t[1];t=t[0];let l=null!=e.training&&e.training;0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=E({ones:()=>s.P61(t),rate:this.dropout,training:l,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=E({ones:()=>s.P61(r),rate:this.recurrentDropout,training:l,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,u=this.recurrentDropoutMask;i=null!=a?n.Om(s.lKK(t,a),this.kernel.read()):n.Om(t,this.kernel.read()),null!=this.bias&&(i=n.ni(i,this.bias.read())),null!=u&&(r=s.lKK(r,u));let h=s.WQq(i,n.Om(r,this.recurrentKernel.read()));return null!=this.activation&&(h=this.activation.apply(h)),[h,h]})}getConfig(){let t=super.getConfig(),e={units:this.units,activation:(0,r.Bu)(this.activation),useBias:this.useBias,kernelInitializer:(0,h.zo)(this.kernelInitializer),recurrentInitializer:(0,h.zo)(this.recurrentInitializer),biasInitializer:(0,h.zo)(this.biasInitializer),kernelRegularizer:(0,c.R9)(this.kernelRegularizer),recurrentRegularizer:(0,c.R9)(this.recurrentRegularizer),biasRegularizer:(0,c.R9)(this.biasRegularizer),activityRegularizer:(0,c.R9)(this.activityRegularizer),kernelConstraint:(0,a.uH)(this.kernelConstraint),recurrentConstraint:(0,a.uH)(this.recurrentConstraint),biasConstraint:(0,a.uH)(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),e)}}b.className="SimpleRNNCell",s.JFn.registerClass(b);class f extends R{constructor(t){t.cell=new b(t),super(t)}call(t,e){return(0,s.DZQ)(()=>{null!=this.cell.dropoutMask&&(s.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(s.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let i=null==e?null:e.mask,r=null==e?null:e.training,n=null==e?null:e.initialState;return super.call(t,{mask:i,training:r,initialState:n})})}static fromConfig(t,e){return new t(e)}}f.className="SimpleRNN",s.JFn.registerClass(f);class m extends S{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new o.Qp("GRUCell does not support reset_after parameter set to true.");this.units=t.units,(0,p.oo)(this.units,"units"),this.activation=(0,r.b_)(void 0===t.activation?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=(0,r.b_)(void 0===t.recurrentActivation?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=null==t.useBias||t.useBias,this.kernelInitializer=(0,h.Fe)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=(0,h.Fe)(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=(0,h.Fe)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=(0,c.Bm)(t.kernelRegularizer),this.recurrentRegularizer=(0,c.Bm)(t.recurrentRegularizer),this.biasRegularizer=(0,c.Bm)(t.biasRegularizer),this.kernelConstraint=(0,a.YZ)(t.kernelConstraint),this.recurrentConstraint=(0,a.YZ)(t.recurrentConstraint),this.biasConstraint=(0,a.YZ)(t.biasConstraint),this.dropout=g.jk([1,g.T9([0,null==t.dropout?0:t.dropout])]),this.recurrentDropout=g.jk([1,g.T9([0,null==t.recurrentDropout?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){let e=(t=(0,d.U$)(t))[t.length-1];this.kernel=this.addWeight("kernel",[e,3*this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,3*this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[3*this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,e){return(0,s.DZQ)(()=>{let i,r,l;if(2!==t.length)throw new o.Qp(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);let a=null!=e.training&&e.training,u=t[1];t=t[0],0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=E({ones:()=>s.P61(t),rate:this.dropout,training:a,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=E({ones:()=>s.P61(u),rate:this.recurrentDropout,training:a,count:3,dropoutFunc:this.dropoutFunc}));let h=this.dropoutMask,c=this.recurrentDropoutMask;0<this.dropout&&this.dropout<1&&(t=s.lKK(t,h[0]));let p=n.Om(t,this.kernel.read());this.useBias&&(p=n.ni(p,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(u=s.lKK(u,c[0]));let g=this.recurrentKernel.read(),[d,I]=s.lDo(g,[2*this.units,this.units],g.rank-1),z=n.Om(u,d),[k,A,R]=s.lDo(p,3,p.rank-1),[S,b]=s.lDo(z,2,z.rank-1);i=this.recurrentActivation.apply(s.WQq(k,S)),r=this.recurrentActivation.apply(s.WQq(A,b));let f=n.Om(s.lKK(r,u),I);l=this.activation.apply(s.WQq(R,f));let m=s.WQq(s.lKK(i,u),s.lKK(s.WQq(1,s.HZy(i)),l));return[m,m]})}getConfig(){let t=super.getConfig(),e={units:this.units,activation:(0,r.Bu)(this.activation),recurrentActivation:(0,r.Bu)(this.recurrentActivation),useBias:this.useBias,kernelInitializer:(0,h.zo)(this.kernelInitializer),recurrentInitializer:(0,h.zo)(this.recurrentInitializer),biasInitializer:(0,h.zo)(this.biasInitializer),kernelRegularizer:(0,c.R9)(this.kernelRegularizer),recurrentRegularizer:(0,c.R9)(this.recurrentRegularizer),biasRegularizer:(0,c.R9)(this.biasRegularizer),activityRegularizer:(0,c.R9)(this.activityRegularizer),kernelConstraint:(0,a.uH)(this.kernelConstraint),recurrentConstraint:(0,a.uH)(this.recurrentConstraint),biasConstraint:(0,a.uH)(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),e)}}m.className="GRUCell",s.JFn.registerClass(m);class C extends R{constructor(t){0===t.implementation&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new m(t),super(t)}call(t,e){return(0,s.DZQ)(()=>{null!=this.cell.dropoutMask&&(s.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(s.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let i=null==e?null:e.mask,r=null==e?null:e.training,n=null==e?null:e.initialState;return super.call(t,{mask:i,training:r,initialState:n})})}static fromConfig(t,e){return 0===e.implmentation&&(e.implementation=1),new t(e)}}C.className="GRU",s.JFn.registerClass(C);class T extends S{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,(0,p.oo)(this.units,"units"),this.activation=(0,r.b_)(void 0===t.activation?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=(0,r.b_)(void 0===t.recurrentActivation?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=null==t.useBias||t.useBias,this.kernelInitializer=(0,h.Fe)(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=(0,h.Fe)(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=(0,h.Fe)(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=(0,c.Bm)(t.kernelRegularizer),this.recurrentRegularizer=(0,c.Bm)(t.recurrentRegularizer),this.biasRegularizer=(0,c.Bm)(t.biasRegularizer),this.kernelConstraint=(0,a.YZ)(t.kernelConstraint),this.recurrentConstraint=(0,a.YZ)(t.recurrentConstraint),this.biasConstraint=(0,a.YZ)(t.biasConstraint),this.dropout=g.jk([1,g.T9([0,null==t.dropout?0:t.dropout])]),this.recurrentDropout=g.jk([1,g.T9([0,null==t.recurrentDropout?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var e;let i;let s=(t=(0,d.U$)(t))[t.length-1];if(this.kernel=this.addWeight("kernel",[s,4*this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,4*this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){if(this.unitForgetBias){let t=this.biasInitializer,s=this.units;i=new((e=class extends h.H4{apply(e,i){let r=t.apply([s]),l=new h.sN().apply([s]),a=t.apply([2*s]);return n.ly(n.ly(r,l),a)}}).className="CustomInit",e)}else i=this.biasInitializer;this.bias=this.addWeight("bias",[4*this.units],null,i,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,e){return(0,s.DZQ)(()=>{let i,r,l,a;let u=null!=e.training&&e.training;if(3!==t.length)throw new o.Qp(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let h=t[1],c=t[2];t=t[0],0<this.dropout&&this.dropout<1&&null==this.dropoutMask&&(this.dropoutMask=E({ones:()=>s.P61(t),rate:this.dropout,training:u,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&null==this.recurrentDropoutMask&&(this.recurrentDropoutMask=E({ones:()=>s.P61(h),rate:this.recurrentDropout,training:u,count:4,dropoutFunc:this.dropoutFunc}));let p=this.dropoutMask,g=this.recurrentDropoutMask;0<this.dropout&&this.dropout<1&&(t=s.lKK(t,p[0]));let d=n.Om(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(h=s.lKK(h,g[0])),d=s.WQq(d,n.Om(h,this.recurrentKernel.read())),this.useBias&&(d=n.ni(d,this.bias.read()));let[I,z,k,A]=s.lDo(d,4,d.rank-1);i=this.recurrentActivation.apply(I),r=this.recurrentActivation.apply(z),l=s.WQq(s.lKK(r,c),s.lKK(i,this.activation.apply(k))),a=this.recurrentActivation.apply(A);let R=s.lKK(a,this.activation.apply(l));return[R,R,l]})}getConfig(){let t=super.getConfig(),e={units:this.units,activation:(0,r.Bu)(this.activation),recurrentActivation:(0,r.Bu)(this.recurrentActivation),useBias:this.useBias,kernelInitializer:(0,h.zo)(this.kernelInitializer),recurrentInitializer:(0,h.zo)(this.recurrentInitializer),biasInitializer:(0,h.zo)(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:(0,c.R9)(this.kernelRegularizer),recurrentRegularizer:(0,c.R9)(this.recurrentRegularizer),biasRegularizer:(0,c.R9)(this.biasRegularizer),activityRegularizer:(0,c.R9)(this.activityRegularizer),kernelConstraint:(0,a.uH)(this.kernelConstraint),recurrentConstraint:(0,a.uH)(this.recurrentConstraint),biasConstraint:(0,a.uH)(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),e)}}T.className="LSTMCell",s.JFn.registerClass(T);class D extends R{constructor(t){0===t.implementation&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new T(t),super(t)}call(t,e){return(0,s.DZQ)(()=>{null!=this.cell.dropoutMask&&(s.ASo(this.cell.dropoutMask),this.cell.dropoutMask=null),null!=this.cell.recurrentDropoutMask&&(s.ASo(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let i=null==e?null:e.mask,r=null==e?null:e.training,n=null==e?null:e.initialState;return super.call(t,{mask:i,training:r,initialState:n})})}static fromConfig(t,e){return 0===e.implmentation&&(e.implementation=1),new t(e)}}D.className="LSTM",s.JFn.registerClass(D);class N extends S{constructor(t){super(t),this.cells=t.cells}get stateSize(){let t=[];for(let e of this.cells.slice().reverse())Array.isArray(e.stateSize)?t.push(...e.stateSize):t.push(e.stateSize);return t}call(t,e){return(0,s.DZQ)(()=>{let i;let s=t.slice(1),r=[];for(let t of this.cells.slice().reverse())Array.isArray(t.stateSize)?r.push(s.splice(0,t.stateSize.length)):r.push(s.splice(0,1));r.reverse();let n=[];for(let l=0;l<this.cells.length;++l){let a=this.cells[l];s=r[l],i=0===l?[t[0]].concat(s):[i[0]].concat(s),i=a.call(i,e),n.push(i.slice(1))}for(let t of(s=[],n.slice().reverse()))s.push(...t);return[i[0]].concat(s)})}build(t){let e;(0,d.TT)(t)&&(t=t[0]),this.cells.forEach((i,s)=>{(0,l.IU)(`RNNCell_${s}`,()=>{i.build(t),e=Array.isArray(i.stateSize)?i.stateSize[0]:i.stateSize,t=[t[0],e]})}),this.built=!0}getConfig(){let t=super.getConfig(),e=this.cells.map(t=>({className:t.getClassName(),config:t.getConfig()}));return Object.assign(Object.assign({},t),{cells:e})}static fromConfig(t,e,i={}){let s=[];for(let t of e.cells)s.push((0,z.i)(t,i));return new t({cells:s})}get trainableWeights(){if(!this.trainable)return[];let t=[];for(let e of this.cells)t.push(...e.trainableWeights);return t}get nonTrainableWeights(){let t=[];for(let e of this.cells)t.push(...e.nonTrainableWeights);if(!this.trainable){let e=[];for(let t of this.cells)e.push(...t.trainableWeights);return e.concat(t)}return t}getWeights(){let t=[];for(let e of this.cells)t.push(...e.weights);return(0,I.ex)(t)}setWeights(t){let e=[];for(let i of this.cells){let s=i.weights.length,r=t.splice(s);for(let t=0;t<i.weights.length;++t)e.push([i.weights[t],r[t]])}(0,I.UM)(e)}}function E(t){let{ones:e,rate:i,training:r=!1,count:l=1,dropoutFunc:a}=t,u=()=>null!=a?a(e(),i):n.EZ(e(),i),o=()=>n.Ls(u,e,r);return!l||l<=1?s.aCs(o().clone()):Array(l).fill(void 0).map(o).map(t=>s.aCs(t.clone()))}N.className="StackedRNNCells",s.JFn.registerClass(N)}}]);