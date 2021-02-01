(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{584:function(e,t,a){"use strict";a.r(t);var s=a(0),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" Start")]),e._v(" "),a("p",[e._v("ViteAPI wraps and extends Gvite-RPC API. Functions of network request/listening are included.")]),e._v(" "),a("h2",{attrs:{id:"module-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-import"}},[e._v("#")]),e._v(" Module Import")]),e._v(" "),a("p",[e._v("ES6:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgVml0ZUFQSSB9IGZyb20gJ0B2aXRlL3ZpdGVqcyc7Cg=="}}),e._v(" "),a("p",[e._v("Common:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgeyBWaXRlQVBJIH0gPSByZXF1aXJlKCdAdml0ZS92aXRlanMnKTsK"}}),e._v(" "),a("h2",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[e._v("#")]),e._v(" Constructor")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Constructor Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("provider : Provider")])]),e._v(" "),a("li",[a("code",[e._v("onInitCallback : function")]),e._v(" : Callback function that will be called when connection is established")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IFdTX1JQQyBmcm9tICdAdml0ZS92aXRlanMtd3MnOwppbXBvcnQgeyBWaXRlQVBJIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHdzU2VydmljZSA9IG5ldyBXU19SUEMoJnF1b3Q7d3M6Ly9leGFtcGxlLmNvbSZxdW90Oyk7Cgpjb25zdCBhcGkgPSBuZXcgVml0ZUFQSSh3c1NlcnZpY2UsICgpID0mZ3Q7IHsKICAgIGNvbnNvbGUubG9nKCZxdW90O0Nvbm5lY3RlZC4mcXVvdDspOwp9KTsKCmFwaS5yZXF1ZXN0KCdsZWRnZXJfZ2V0U25hcHNob3RDaGFpbkhlaWdodCcpLnRoZW4oKGhlaWdodCkgPSZndDsgewogICAgY29uc29sZS5sb2coaGVpZ2h0KTsKfSk7Cg=="}}),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("h3",{attrs:{id:"getbalanceinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbalanceinfo"}},[e._v("#")]),e._v(" getBalanceInfo")]),e._v(" "),a("p",[e._v("Return account balance, including balance not received")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Address")]),e._v(" Address of account")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("Promise<"),a("code",[e._v("{ balance, unreceived }")]),e._v(">")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gLi4uCgpwcm92aWRlci5nZXRCYWxhbmNlSW5mbygndml0ZV8wOThkZmFlMDI2NzlhNGNhMDVhNGM4YmY1ZGQwMGE4NzU3ZjBjNjIyYmZjY2NlN2Q2OCcpCi50aGVuKCh7IGJhbGFuY2UsIHVucmVjZWl2ZWQgfSkgPSZndDsgewogICAgY29uc29sZS5sb2coYmFsYW5jZSwgdW5yZWNlaXZlZCk7Cn0pCi5jYXRjaChlcnIgPSZndDsgewogICAgY29uc29sZS53YXJuKGVycik7Cn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"gettransactionlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettransactionlist"}},[e._v("#")]),e._v(" getTransactionList")]),e._v(" "),a("p",[e._v("Return transaction list by account")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of account")]),e._v(" "),a("li",[a("code",[e._v("pageIndex: number")]),e._v(" Page index")]),e._v(" "),a("li",[a("code",[e._v("pageSize?: number")]),e._v(" Page size. Default is 50")])])]),e._v(" "),a("li",[a("code",[e._v("String[] | 'all'")]),e._v(" The contract transaction type of which the internal fields of contract need to be resolved. For default, all contract transactions are resolved")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Promise<"),a("code",[e._v("Array<Transaction>")]),e._v(">")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("p",[e._v("Request:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"cHJvdmlkZXIuZ2V0VHJhbnNhY3Rpb25MaXN0KHsKICAgIGFkZHJlc3M6ICd2aXRlXzU1MzQ2MmJjYTEzN2JhYzI5ZjQ0MGU5YWY0YWIyZTJjMWJiODI0OTNlNDFkMmJjOGIyJywKICAgIHBhZ2VJbmRleDogMCwKICAgIHBhZ2VTaXplOiA1MAp9KTsK"}}),e._v(" "),a("p",[e._v("Responce:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"W3sKICAgICZxdW90O2FjY291bnRBZGRyZXNzJnF1b3Q7OiAmcXVvdDt2aXRlXzU1MzQ2MmJjYTEzN2JhYzI5ZjQ0MGU5YWY0YWIyZTJjMWJiODI0OTNlNDFkMmJjOGIyJnF1b3Q7LAogICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwMDAmcXVvdDssCiAgICAmcXVvdDtibG9ja1R5cGUmcXVvdDs6IDIsCiAgICAmcXVvdDtkYXRhJnF1b3Q7OiAmcXVvdDt5L0RrK2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWpodkp2d1FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFJNGJ5YjhFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBdGpjM1JsYzNSMGIydGxiZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVRMU5VVkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBPSZxdW90OywKICAgICZxdW90O3RvQWRkcmVzcyZxdW90OzogJnF1b3Q7dml0ZV8wMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1OTUyOTJkOTk2ZCZxdW90OywKICAgICZxdW90O3RyYW5zYWN0aW9uVHlwZSZxdW90OzogJnF1b3Q7TWludGFnZSZxdW90OywKICAgICZxdW90O2NvbnRyYWN0UGFyYW1zJnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7MCZxdW90OzogJnF1b3Q7MSZxdW90OywKICAgICAgICAmcXVvdDsxJnF1b3Q7OiAmcXVvdDtjc3Rlc3R0b2tlbiZxdW90OywKICAgICAgICAmcXVvdDsyJnF1b3Q7OiAmcXVvdDtDU1RUJnF1b3Q7LAogICAgICAgICZxdW90OzMmcXVvdDs6ICZxdW90OzEwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90OzQmcXVvdDs6ICZxdW90OzImcXVvdDssCiAgICAgICAgJnF1b3Q7NSZxdW90OzogJnF1b3Q7MTAwMDAwMDAwMDAwMDAwMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7NiZxdW90OzogJnF1b3Q7MSZxdW90OywKICAgICAgICAmcXVvdDtkZWNpbWFscyZxdW90OzogJnF1b3Q7MiZxdW90OywKICAgICAgICAmcXVvdDtpc1JlSXNzdWFibGUmcXVvdDs6ICZxdW90OzEmcXVvdDssCiAgICAgICAgJnF1b3Q7bWF4U3VwcGx5JnF1b3Q7OiAmcXVvdDsxMDAwMDAwMDAwMDAwMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtvd25lckJ1cm5Pbmx5JnF1b3Q7OiAmcXVvdDsxJnF1b3Q7LAogICAgICAgICZxdW90O3Rva2VuTmFtZSZxdW90OzogJnF1b3Q7Y3N0ZXN0dG9rZW4mcXVvdDssCiAgICAgICAgJnF1b3Q7dG9rZW5TeW1ib2wmcXVvdDs6ICZxdW90O0NTVFQmcXVvdDssCiAgICAgICAgJnF1b3Q7dG90YWxTdXBwbHkmcXVvdDs6ICZxdW90OzEwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7CiAgICB9Cn1dCg=="}}),e._v(" "),a("h3",{attrs:{id:"calloffchaincontract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calloffchaincontract"}},[e._v("#")]),e._v(" callOffChainContract")]),e._v(" "),a("p",[e._v("Call contract's offchain method")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address : Address")]),e._v(" Address of contract")]),e._v(" "),a("li",[a("code",[e._v("abi")]),e._v(" ABI")]),e._v(" "),a("li",[a("code",[e._v("code : Base64")]),e._v(' Binary code for offchain query. This is the value of "OffChain Binary" section generated when compiling the contract with '),a("code",[e._v("--bin")])]),e._v(" "),a("li",[a("code",[e._v("params")]),e._v(" Encoded passed-in parameters")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Promise<"),a("code",[e._v("Base64")]),e._v(">")])])])]),e._v(" "),a("h3",{attrs:{id:"addtransactiontype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addtransactiontype"}},[e._v("#")]),e._v(" addTransactionType")]),e._v(" "),a("p",[e._v("Add new transaction type. When "),a("code",[e._v("provider.getTransactionList")]),e._v(" is called, transactions returned will be grouped by transaction type.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: Object")]),e._v(" Name of transaction type is stored as the key\n"),a("ul",[a("li",[a("code",[e._v("contractAddress : Address")]),e._v(" Address of contract")]),e._v(" "),a("li",[a("code",[e._v("abi")]),e._v(" ABI")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Ly8gLi4uCgpwcm92aWRlci5hZGRUcmFuc2FjdGlvblR5cGUoeyAKICAgIGhlbGxvV29ybGQ6IHsgCiAgICAgICAgY29udHJhY3RBZGRyOiAndml0ZV8wMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzZjZhZjc0NTliOScsIAogICAgICAgIGFiaTogeyBtZXRob2ROYW1lOiAnaGVsbG8nLCBpbnB1dHM6IFtdLCB0eXBlOiAnZnVuY3Rpb24nIH0KICAgIH0KfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"setprovider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setprovider"}},[e._v("#")]),e._v(" setProvider")]),e._v(" "),a("p",[e._v("Set new provider")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Parameters")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("provider : Provider Instance")]),e._v(" New provider")]),e._v(" "),a("li",[a("code",[e._v("onInitCallback : Function")]),e._v(" Callback function that will be called when connection is established")]),e._v(" "),a("li",[a("code",[e._v("abort : boolean")]),e._v(" If "),a("code",[e._v("true")]),e._v(", the ongoing request connection of original provider will be interrupted")])])])]),e._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" request")]),e._v(" "),a("p",[e._v("Call RPC API and return response")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("methods : string")]),e._v(" Name of API method")]),e._v(" "),a("li",[a("code",[e._v("...args")]),e._v(" Passed-in parameters")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Promise<"),a("code",[e._v("JsonRPC response")]),e._v("> RPC response")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gLi4uLi4uCgovLyB7Ci8vICAgICBqc29ucnBjOiAmcXVvdDsyLjAmcXVvdDssCi8vICAgICBpZDogMzMKLy8gICAgIG1ldGhvZDogJnF1b3Q7cnBjTWV0aG9kTmFtZSZxdW90OwovLyAgICAgcGFyYW1zOiBbMSwgMSwgMl0KLy8gfQpteU5ldFByb2Nlc3Nvci5yZXF1ZXN0KCdycGNNZXRob2ROYW1lJywgMSwgMSwgMikudGhlbigoKSA9Jmd0OyB7CiAgICAvLyAuLi4KfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"sendnotification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendnotification"}},[e._v("#")]),e._v(" sendNotification")]),e._v(" "),a("p",[e._v("Call RPC API and do not return response")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Parameters")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("methods : string")]),e._v(" Name of API method")]),e._v(" "),a("li",[a("code",[e._v("...args")]),e._v(" Passed-in parameters")])])])]),e._v(" "),a("h3",{attrs:{id:"batch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch"}},[e._v("#")]),e._v(" batch")]),e._v(" "),a("p",[e._v("Call a batch of RPC APIs")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")]),e._v(" (RPCrequest[])")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: Object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("type: string<request | notification>")])]),e._v(" "),a("li",[a("code",[e._v("methodName: string")]),e._v(" Name of API method")]),e._v(" "),a("li",[a("code",[e._v("params: any")]),e._v(" Passed-in parameters")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Promise<"),a("code",[e._v("JsonRPC response")]),e._v("> RPC response")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gLi4uLi4uCgovLyBbewovLyAgICAganNvbnJwYzogJnF1b3Q7Mi4wJnF1b3Q7LAovLyAgICAgaWQ6IDMzCi8vICAgICBtZXRob2Q6ICZxdW90O3JwY01ldGhvZE5hbWUmcXVvdDsKLy8gICAgIHBhcmFtczogWzEsIDEsIDJdCi8vIH1dCm15TmV0UHJvY2Vzc29yLmJhdGNoKFsKICAgIHR5cGU6ICdyZXF1ZXN0JywKICAgIG1ldGhvZE5hbWU6ICdycGNNZXRob2ROYW1lJywgCiAgICBwYXJhbXM6IFsxLCAxLCAyXQpdKS50aGVuKCgpID0mZ3Q7IHsKICAgIC8vIC4uLgp9KTsK"}}),e._v(" "),a("h3",{attrs:{id:"subscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe"}},[e._v("#")]),e._v(" subscribe")]),e._v(" "),a("p",[e._v("Subscribe to event")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Tips")]),e._v(" "),a("p",[e._v("Polling, instead of subscription, will be used by the method if gvite connection is established in HTTP.\nRefer to "),a("a",{attrs:{href:"/api/rpc/subscribe_v2"}},[e._v("Vite RPC Subscription")])])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("methods : string")]),e._v(" Name of method")]),e._v(" "),a("li",[a("code",[e._v("...args")]),e._v(" Passed-in parameters")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Promise<"),a("code",[e._v("event")]),e._v("> Event")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("event")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("on("),a("code",[e._v("callback : Function")]),e._v("): Start listening to the event. The callback function will be called when the event occurs.")]),e._v(" "),a("li",[e._v("off: Stop listening")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gLi4uCgpwcm92aWRlci5zdWJzY3JpYmUoJ25ld0FjY291bnRCbG9ja3MnKS50aGVuKChldmVudCkgPSZndDsgewogICAgZXZlbnQub24oKHJlc3VsdCkgPSZndDsgewogICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7CiAgICB9KTsKICAgIC8vIGV2ZW50Lm9mZigpOwp9KS5jYXRjaChlcnIgPSZndDsgewogICAgY29uc29sZS53YXJuKGVycik7Cn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"unsubscribe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribe"}},[e._v("#")]),e._v(" unsubscribe")]),e._v(" "),a("p",[e._v("Cancel subscription")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("event")]),e._v(": Event returned by "),a("code",[e._v("subscribe")]),e._v(" method")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gLi4uCnByb3ZpZGVyLnVuc3Vic2NyaWJlKGV2ZW50KTsK"}}),e._v(" "),a("h3",{attrs:{id:"unsubscribeall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsubscribeall"}},[e._v("#")]),e._v(" unsubscribeAll")]),e._v(" "),a("p",[e._v("Cancel all subscriptions")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example")])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gLi4uCnByb3ZpZGVyLnVuc3Vic2NyaWJlQWxsKCk7Cg=="}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);