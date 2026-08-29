import{a as e,c as t,d as n,i as r,t as i}from"./decorate-DwdQ_zqw.js";import"./icon-y1sjzqP3.js";import{t as a}from"./consume-w911vKP3.js";import{a as o,l as s,o as c,t as l}from"./index-D8EIYGNW.js";import"./icon-button-BDGqSq-k.js";import"./button-CFO6LkDK.js";import"./list-CkiNw9pq.js";import{t as u}from"./shared-BqBhntqe.js";import"./switch-ClX0vURn.js";import"./slider-CVPid94b.js";import"./snackbar-B9IQlbfK.js";var d=class extends o(e){constructor(...e){super(...e),this.vm=l,this._pickRingtone=()=>{let e=prompt(`Alarm sound name`,this.vm.alarmSound.get());e&&this.vm.onAction({type:`saveAlarmSound`,uri:e})},this._preview=()=>{let e=this.vm.vibrationDuration.get(),t=this.vm.vibrationGap.get();try{navigator.vibrate([e,t,e]),M3eSnackbar.open(`Vibration preview`)}catch{M3eSnackbar.open(`Vibration not supported`)}},this._restoreDefaults=()=>{this.vm.vibrationDuration.set(1e3),this.vm.vibrationGap.set(1e3),this.vm.vibrationStrength.set(-1),M3eSnackbar.open(`Defaults restored`)}}static{this.styles=[u,n` :host{display:block} .slider-row{ flex:1 } .plus-note{ opacity:.7; text-align:center } `]}render(){let e=`vibrate`in navigator&&typeof navigator.vibrate==`function`;return t`
      <m3e-app-bar><m3e-icon-button slot="leading" href="${s(`/settings`)}" aria-label="Back"><m3e-icon name="arrow_back"></m3e-icon></m3e-icon-button><span slot="title">Alarm</span></m3e-app-bar>
      <div class="u-page-wrap">
        <m3e-list variant="segmented">
          <m3e-list-action @click=${this._pickRingtone}><m3e-icon slot="leading" name="music_note"></m3e-icon>Alarm sound<span slot="supporting-text">${this.vm.alarmSound.get()}</span><m3e-icon slot="trailing" name="arrow_forward"></m3e-icon></m3e-list-action>
          <m3e-list-item><m3e-icon slot="leading" name="volume_up"></m3e-icon>Sound enabled<m3e-switch slot="trailing" ?checked=${this.vm.soundEnabled.get()} @change=${()=>this.vm.toggleSound()}></m3e-switch></m3e-list-item>
          <m3e-list-item><m3e-icon slot="leading" name="vibration"></m3e-icon>Vibrate enabled<m3e-switch slot="trailing" ?checked=${this.vm.vibrateEnabled.get()} @change=${()=>this.vm.toggleVibrate()}></m3e-switch></m3e-list-item>
          <m3e-list-item><m3e-icon slot="leading" name="speaker"></m3e-icon>Media volume for alarm<m3e-switch slot="trailing" ?checked=${this.vm.mediaVolume.get()} @change=${()=>this.vm.toggleMediaVolume()}></m3e-switch></m3e-list-item>
        </m3e-list>

        <m3e-list variant="segmented">
          <m3e-list-action @click=${this._preview}><m3e-icon slot="leading" name="play_circle"></m3e-icon>Preview vibration<m3e-icon slot="trailing" name="play_arrow"></m3e-icon></m3e-list-action>
          <m3e-list-action @click=${this._restoreDefaults}><m3e-icon slot="leading" name="restart_alt"></m3e-icon>Restore defaults</m3e-list-action>
          <m3e-list-item>
            <div class="slider-row">Duration <span class="u-opacity-70">${this.vm.vibrationDuration.get()} ms</span>
              <m3e-slider min="200" max="3000" step="100"><m3e-slider-thumb value=${this.vm.vibrationDuration.get()} @change=${e=>{let t=Number(e.target.getAttribute(`value`));this.vm.vibrationDuration.set(t)}}></m3e-slider-thumb></m3e-slider>
            </div>
          </m3e-list-item>
          <m3e-list-item>
            <div class="slider-row">Gap <span class="u-opacity-70">${this.vm.vibrationGap.get()} ms</span>
              <m3e-slider min="100" max="2000" step="100"><m3e-slider-thumb value=${this.vm.vibrationGap.get()} @change=${e=>{let t=Number(e.target.getAttribute(`value`));this.vm.vibrationGap.set(t)}}></m3e-slider-thumb></m3e-slider>
            </div>
          </m3e-list-item>
          ${e?t`<m3e-list-item>
            <div class="slider-row">Strength <span class="u-opacity-70">${this.vm.vibrationStrength.get()}</span>
              <m3e-slider min="-1" max="255" step="1"><m3e-slider-thumb value=${this.vm.vibrationStrength.get()} @change=${e=>{let t=Number(e.target.getAttribute(`value`));this.vm.vibrationStrength.set(t)}}></m3e-slider-thumb></m3e-slider>
            </div>
          </m3e-list-item>`:``}
        </m3e-list>
        ${this.vm.isPlus.get()?``:t`<p class="plus-note">Advanced vibration is a Plus feature — patterns are simplified on free tier.</p>`}
      </div>
    `}};i([a({context:c,subscribe:!0})],d.prototype,`vm`,void 0),d=i([r(`settings-alarm-page`)],d);export{d as SettingsAlarmPage};