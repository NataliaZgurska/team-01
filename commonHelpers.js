(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="TASKS_KEY",u=document.querySelector("#task-form"),a=document.querySelector("#task-list");u.addEventListener("submit",f);function f(t){t.preventDefault();const o=t.target.taskName.value;console.log(o),d(o),t.target.reset()}console.log(c()||[]);function d(t){const o=c()||[],n=document.createElement("li");n.textContent=t,a.append(n),o.push(t),m(l,o)}function m(t,o){localStorage.setItem(t,JSON.stringify(o))}function c(t){return JSON.parse(localStorage.getItem(t))}
//# sourceMappingURL=commonHelpers.js.map
