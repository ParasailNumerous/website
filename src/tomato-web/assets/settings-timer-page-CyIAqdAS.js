import{a as e,c as t,d as n,i as r,t as i}from"./decorate-DwdQ_zqw.js";import"./icon-y1sjzqP3.js";import{t as a}from"./consume-w911vKP3.js";import{a as o,l as s,n as c,o as l,s as u,t as d}from"./index-D8EIYGNW.js";import"./icon-button-BDGqSq-k.js";import"./card-zOL3kfo1.js";import"./list-CkiNw9pq.js";import{t as f}from"./shared-BqBhntqe.js";import"./switch-ClX0vURn.js";import"./slider-CVPid94b.js";import"./form-field-DUDWjbKu.js";var p=class extends o(e){constructor(...e){super(...e),this.timerVm=c,this.settingsVm=d}static{this.styles=[f,n`
    :host{ display:block }
    .dur-row{ display:flex; gap:0 12px; --m3e-form-field-width: calc(100% / 3) }
    .warn{ padding:12px 16px; border-radius:16px; background: var(--md-sys-color-error-container); color: var(--md-sys-color-on-error-container); }
    .session-head { display:flex; justify-content:space-between; }
    m3e-slider {
    WIDTH: 100%}
  `]}render(){let e=this.timerVm.running.get();return t`
      <m3e-app-bar><m3e-icon-button slot="leading" href="${s(`/settings`)}" aria-label="Back"><m3e-icon name="arrow_back"></m3e-icon></m3e-icon-button><span slot="title">Timer</span></m3e-app-bar>
      <div class="u-page-wrap">
        ${e?t`<div class="warn">Timer is running — durations are locked. Reset to edit.</div>`:``}
        <m3e-card variant="outlined"><div slot="content">
          <div class="dur-row">
            <m3e-form-field variant="outlined">
              <label slot="label" for="focusMins">Focus</label>
              <input id="focusMins" type="number" min="1" max="999" .value=${String(Math.round(this.timerVm.focusDuration.get()/60))} ?disabled=${e} @change=${e=>this.settingsVm.setFocusMinutes(Number(e.target.value))} />
            </m3e-form-field>
            <m3e-form-field variant="outlined">
              <label slot="label" for="shortMins">Short</label>
              <input id="shortMins" type="number" min="1" max="999" .value=${String(Math.round(this.timerVm.shortBreakDuration.get()/60))} ?disabled=${e} @change=${e=>this.settingsVm.setShortMinutes(Number(e.target.value))} />
            </m3e-form-field>
            <m3e-form-field variant="outlined">
              <label slot="label" for="longMins">Long</label>
              <input id="longMins" type="number" min="1" max="999" .value=${String(Math.round(this.timerVm.longBreakDuration.get()/60))} ?disabled=${e} @change=${e=>this.settingsVm.setLongMinutes(Number(e.target.value))} />
            </m3e-form-field>
          </div>
          <div class="u-mt-4">
            <div class="session-head"><span>Session length</span><span>${this.timerVm.sessionLength.get()}</span></div>
            <m3e-slider ?disabled=${e} min="1" max="10" step="1"><m3e-slider-thumb .value=${this.timerVm.sessionLength.get()} @input=${e=>this.settingsVm.setSessionLength(Number(e.target.getAttribute(`value`)??this.timerVm.sessionLength.get()))} @change=${e=>this.settingsVm.setSessionLength(Number(e.target.getAttribute(`value`)??this.timerVm.sessionLength.get()))}></m3e-slider-thumb></m3e-slider>
            <div class="u-muted">Focus sessions before a long break</div>
          </div>
        </div></m3e-card>

        <m3e-list variant="segmented">
          <m3e-list-item><m3e-icon slot="leading" name="restart_alt"></m3e-icon>Auto-start next timer<span slot="supporting-text">Automatically start next session</span><m3e-switch slot="trailing" ?checked=${this.settingsVm.autoStart.get()} @change=${()=>this.settingsVm.toggleAutoStart()}></m3e-switch></m3e-list-item>
          <m3e-list-item><m3e-icon slot="leading" name="do_not_disturb_on"></m3e-icon>DND<span slot="supporting-text">Enable Do Not Disturb during focus</span><m3e-switch slot="trailing" ?checked=${this.settingsVm.dnd.get()} @change=${()=>this.settingsVm.toggleDnd()}></m3e-switch></m3e-list-item>
          <m3e-list-item><m3e-icon slot="leading" name="aod"></m3e-icon>Always-on display<span slot="supporting-text">${this.settingsVm.isPlus.get()?`Keep screen on during focus`:`Plus required`}</span><m3e-switch slot="trailing" ?checked=${this.settingsVm.aod.get()} ?disabled=${!this.settingsVm.isPlus.get()} @change=${()=>this.settingsVm.toggleAod()}></m3e-switch></m3e-list-item>
          <m3e-list-item><m3e-icon slot="leading" name="security"></m3e-icon>Secure AOD<span slot="supporting-text">Hide content on lock screen</span><m3e-switch slot="trailing" ?checked=${this.settingsVm.secureAod.get()} ?disabled=${!this.settingsVm.isPlus.get()||!this.settingsVm.aod.get()} @change=${()=>this.settingsVm.toggleSecureAod()}></m3e-switch></m3e-list-item>
        </m3e-list>
      </div>
    `}};i([a({context:u,subscribe:!0})],p.prototype,`timerVm`,void 0),i([a({context:l,subscribe:!0})],p.prototype,`settingsVm`,void 0),p=i([r(`settings-timer-page`)],p);export{p as SettingsTimerPage};