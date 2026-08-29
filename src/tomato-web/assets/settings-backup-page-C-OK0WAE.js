import{a as e,c as t,d as n,i as r,n as i,t as a}from"./decorate-DwdQ_zqw.js";import"./icon-y1sjzqP3.js";import{t as o}from"./consume-w911vKP3.js";import{l as s,o as c,t as l}from"./index-D8EIYGNW.js";import"./icon-button-BDGqSq-k.js";import"./card-zOL3kfo1.js";import"./button-CFO6LkDK.js";import{t as u}from"./shared-BqBhntqe.js";import"./form-field-DUDWjbKu.js";var d=class extends e{constructor(...e){super(...e),this.vm=l,this.backupText=``,this._backup=()=>{let e=this.vm.exportBackup();this.backupText=e;try{let t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`tomato-backup.json`,r.click(),URL.revokeObjectURL(n)}catch{}},this._copy=async()=>{try{await navigator.clipboard.writeText(this.backupText||this.vm.exportBackup())}catch{}},this._restore=()=>{let e=(this.shadowRoot?.getElementById(`restoreArea`))?.value.trim();if(e)try{let t=JSON.parse(e);t.prefs&&localStorage.setItem(`tomato:prefs`,t.prefs),t.timer&&localStorage.setItem(`tomato:timer`,t.timer),alert(`Restored — reloading`),location.reload()}catch(e){alert(`Invalid backup: `+e.message)}}}static{this.styles=[u,n` :host{display:block} .card-inner{ display:flex; flex-direction:column; gap:12px } .card-row{ display:flex; justify-content:space-between; align-items:center } .backup-actions{ display:flex; gap:8px; flex-wrap:wrap } `]}render(){return t`
      <m3e-app-bar><m3e-icon-button slot="leading" href="${s(`/settings`)}" aria-label="Back"><m3e-icon name="arrow_back"></m3e-icon></m3e-icon-button><span slot="title">Backup and restore</span></m3e-app-bar>
      <div class="u-page-wrap">
        <m3e-card variant="outlined"><div slot="content" class="card-inner">
          <strong>Backup</strong>
          <p class="u-opacity-70">Export settings and timer state to a JSON file. On web this copies to clipboard / downloads.</p>
          <div class="backup-actions">
            <m3e-button variant="filled" @click=${this._backup}><m3e-icon slot="icon" name="download"></m3e-icon>Export backup</m3e-button>
            <m3e-button variant="tonal" @click=${this._copy}>Copy</m3e-button>
          </div>
          ${this.backupText?t`<textarea readonly class="u-textarea" .value=${this.backupText}></textarea>`:``}
        </div></m3e-card>

        <m3e-card variant="outlined"><div slot="content" class="card-inner">
          <strong>Restore</strong>
          <p class="u-opacity-70">Paste a previously exported backup JSON and restore.</p>
          <m3e-form-field variant="filled" style="width:100%;">
            <label slot="label" for="restoreArea">{"prefs": "..."}</label>
            <textarea id="restoreArea" style="min-height:256px;"></textarea>
          </m3e-form-field>
          <m3e-button variant="tonal" @click=${this._restore}><m3e-icon slot="icon" name="upload"></m3e-icon>Restore</m3e-button>
        </div></m3e-card>

        <m3e-card variant="outlined"><div slot="content" class="card-row">
          <span>Reset all data</span><m3e-button variant="text" @click=${()=>this.vm.resetAll()}>Reset</m3e-button>
        </div></m3e-card>
      </div>
    `}};a([o({context:c})],d.prototype,`vm`,void 0),a([i()],d.prototype,`backupText`,void 0),d=a([r(`settings-backup-page`)],d);export{d as SettingsBackupPage};