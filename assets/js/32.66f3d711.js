(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{367:function(s,a,t){"use strict";t.r(a);var e=t(42),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"quick-docker-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-docker-build"}},[s._v("#")]),s._v(" Quick docker build")]),s._v(" "),t("h2",{attrs:{id:"create-a-resource-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-resource-group"}},[s._v("#")]),s._v(" Create a resource group")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("az group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -n mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -l westus\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"deploy-a-registry-and-a-task-run-which-builds-pushes-to-the-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-registry-and-a-task-run-which-builds-pushes-to-the-registry"}},[s._v("#")]),s._v(" Deploy a registry and a task run which builds/pushes to the registry")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("az deployment group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -g mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --template-file azuredeploy.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters azuredeploy.parameters.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'properties.outputs.registry.value'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -o tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"list-the-image-tag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-the-image-tag"}},[s._v("#")]),s._v(" List the image tag")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("az acr repository list -n "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" -o tsv "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I% az acr repository show-tags -n "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" --repository % --detail -o table\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"crate-a-user-assigned-identity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crate-a-user-assigned-identity"}},[s._v("#")]),s._v(" Crate a user assigned identity")]),s._v(" "),t("p",[s._v("identity=$(az identity create "),t("br"),s._v("\n-g mytaskrunrg "),t("br"),s._v("\n-n myquickdockerbuildrunwithidentity "),t("br"),s._v("\n--query 'id' "),t("br"),s._v("\n-o tsv)")]),s._v(" "),t("h2",{attrs:{id:"deploy-a-task-run-which-is-associated-with-the-user-assigned-identity-and-builds-pushes-an-image-to-the-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-task-run-which-is-associated-with-the-user-assigned-identity-and-builds-pushes-an-image-to-the-registry"}},[s._v("#")]),s._v(" Deploy a task run which is associated with the user assigned identity and builds/pushes an image to the registry")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("az deployment group create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -g mytaskrunrg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --template-file azuredeploy.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters azuredeploy.parameters.json "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userAssignedIdentity")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("$identity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --parameters "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("taskRunName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mytaskrunwithidentity "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --query "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'properties.outputs.registry.value'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -o tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"list-the-image-tag-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-the-image-tag-2"}},[s._v("#")]),s._v(" List the image tag")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("az acr repository list -n "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" -o tsv "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -I% az acr repository show-tags -n "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$registry")]),s._v(" --repository % --detail -o table\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);