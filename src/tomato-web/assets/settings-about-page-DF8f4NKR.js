import{a as e,c as t,d as n,i as r,t as i}from"./decorate-DwdQ_zqw.js";import"./icon-y1sjzqP3.js";import{l as a}from"./index-D8EIYGNW.js";import"./icon-button-BDGqSq-k.js";import"./card-zOL3kfo1.js";import"./button-CFO6LkDK.js";import"./list-CkiNw9pq.js";import{t as o}from"./shared-BqBhntqe.js";var s=class extends e{static{this.styles=[o,n` :host{display:block} `]}render(){return t`
      <m3e-app-bar><m3e-icon-button slot="leading" href="${a(`/settings`)}" aria-label="Back"><m3e-icon name="arrow_back"></m3e-icon></m3e-icon-button><span slot="title">About</span></m3e-app-bar>
      <div class="u-page-wrap">
        <m3e-card variant="filled"><div slot="content" class="u-hero">
          <img src="${a(`/icon-192.png`)}" alt="Tomato" @error=${e=>e.target.style.display=`none`}>
          <div><div class="u-title">Tomato</div><div class="u-subtitle">Pomodoro timer — v0.4.0</div></div>
        </div>
        <div slot="actions"><m3e-button variant="tonal" href="https://github.com/anomalyco/opencode" target="_blank"><m3e-icon slot="icon" name="code"></m3e-icon>GitHub</m3e-button><m3e-button variant="tonal" href="https://discord.gg" target="_blank"><m3e-icon slot="icon" name="forum"></m3e-icon>Discord</m3e-button></div>
        </m3e-card>

        <m3e-card variant="outlined"><div slot="content">
          <div class="u-title" style="font-size:1rem">Creator</div><div class="u-subtitle">Nishant Mishra — minimalist pomodoro for Android, ported to Lit web.</div>
        </div></m3e-card>

        <m3e-list variant="segmented">
          <m3e-list-action href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank"><m3e-icon slot="leading" name="license"></m3e-icon>GPL-3.0 License<m3e-icon slot="trailing" name="open_in_new"></m3e-icon></m3e-list-action>
          <m3e-list-action href="https://github.com" target="_blank"><m3e-icon slot="leading" name="link"></m3e-icon>Source & credits</m3e-list-action>
        </m3e-list>
      </div>
    `}};s=i([r(`settings-about-page`)],s);export{s as SettingsAboutPage};