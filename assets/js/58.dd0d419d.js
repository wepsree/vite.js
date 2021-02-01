(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{570:function(e,s,a){"use strict";a.r(s);var t=a(0),c=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-accountblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-accountblock"}},[e._v("#")]),e._v(" Create AccountBlock")]),e._v(" "),a("h2",{attrs:{id:"createaccountblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createaccountblock"}},[e._v("#")]),e._v(" createAccountBlock")]),e._v(" "),a("p",[e._v("Create an AccountBlock instance")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("type: String")]),e._v(" See "),a("a",{attrs:{href:"#accountblock-type"}},[e._v("AccountBlock Type")])]),e._v(" "),a("li",[a("code",[e._v("params: Object")]),e._v(" Passed-in parameters")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgY3JlYXRlQWNjb3VudEJsb2NrLCB1dGlscyB9ID0gYWNjb3VudEJsb2NrOwoKY29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdyZWNlaXZlJywgewogICAgYWRkcmVzcywKICAgIHNlbmRCbG9ja0hhc2g6IGRhdGFbMF0uaGFzaAp9KTsKCmFzeW5jIGZ1bmN0aW9uIHNlbmRBY2NvdW50QmxvY2soYWNjb3VudEJsb2NrKSB7CiAgICBhY2NvdW50QmxvY2suc2V0UHJvdmlkZXIodml0ZVByb3ZpZGVyKS5zZXRQcml2YXRlS2V5KHByaXZhdGVLZXkpOwogICAgYXdhaXQgYWNjb3VudEJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpOwogICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWNjb3VudEJsb2NrLnNpZ24oKS5zZW5kKCk7CiAgICBjb25zb2xlLmxvZygnc2VuZCBzdWNjZXNzJywgcmVzdWx0KTsKfQo="}}),e._v(" "),a("h2",{attrs:{id:"accountblock-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accountblock-type"}},[e._v("#")]),e._v(" AccountBlock Type")]),e._v(" "),a("h3",{attrs:{id:"receive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receive"}},[e._v("#")]),e._v(" receive")]),e._v(" "),a("p",[e._v("Type of response")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("sendBlockHash: Hex")]),e._v(" Hash of the block of request transaction")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdyZWNlaXZlJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgc2VuZEJsb2NrSGFzaDogJzE1NmE0N2RlOGI1YTY5MDU2MjI3ODM2MGU0MWUzMzdlZTRmMWI0YWE4ZDk3OWYzNzdiZWIwY2M3MGY5MzkwMzInCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"send"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[e._v("#")]),e._v(" send")]),e._v(" "),a("p",[e._v("Type of request")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("toAddress: Address")]),e._v(" Address of transaction recipient")]),e._v(" "),a("li",[a("code",[e._v("tokenId: TokenId")]),e._v(" Token id. Default is "),a("code",[e._v("Vite_TokenId")])]),e._v(" "),a("li",[a("code",[e._v("amount: BigInt")]),e._v(" Amount to send, including decimals. Default is "),a("code",[e._v("0")]),e._v(". For example, fill in "),a("code",[e._v("10000000000000000000")]),e._v(" for 10 VITE")]),e._v(" "),a("li",[a("code",[e._v("data: Base64")]),e._v(" Additional data, optional")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdzZW5kJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgdG9BZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICB0b2tlbklkOiAndHRpXzU2NDk1NDQ1MjA1NDRmNGI0NTRlNmU0MCcsCiAgICBhbW91bnQ6ICcwJywKICAgIGRhdGE6ICdwaW5GTVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUInCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"createcontract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createcontract"}},[e._v("#")]),e._v(" createContract")]),e._v(" "),a("p",[e._v("Type of creating smart contract")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account (creator)")]),e._v(" "),a("li",[a("code",[e._v("code: Hex")]),e._v(" Complied code of contract")]),e._v(" "),a("li",[a("code",[e._v("responseLatency?: Uint8")]),e._v(" Response latency. Default is "),a("code",[e._v("0")]),e._v(", "),a("code",[e._v("responseLatency")]),e._v(" must >= "),a("code",[e._v("randomDegree")])]),e._v(" "),a("li",[a("code",[e._v("quotaMultiplier?: Uint8")]),e._v(" Quota multiplier. Default is "),a("code",[e._v("10")])]),e._v(" "),a("li",[a("code",[e._v("randomDegree?: Uint8")]),e._v(" Random degree. Default is "),a("code",[e._v("0")])]),e._v(" "),a("li",[a("code",[e._v("abi?: Object | Array<Object>")]),e._v(" ABI")]),e._v(" "),a("li",[a("code",[e._v("params?: string | Array<string | boolean>")]),e._v(" Passed-in parameters of contract constructor")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdjcmVhdGVDb250cmFjdCcsIHsKICAgIGFiaTpbeyZxdW90O2NvbnN0YW50JnF1b3Q7OmZhbHNlLCZxdW90O2lucHV0cyZxdW90OzpbeyZxdW90O25hbWUmcXVvdDs6JnF1b3Q7YWRkciZxdW90OywmcXVvdDt0eXBlJnF1b3Q7OiZxdW90O2FkZHJlc3MmcXVvdDt9XSwmcXVvdDtuYW1lJnF1b3Q7OiZxdW90O1NheUhlbGxvJnF1b3Q7LCZxdW90O291dHB1dHMmcXVvdDs6W10sJnF1b3Q7cGF5YWJsZSZxdW90Ozp0cnVlLCZxdW90O3N0YXRlTXV0YWJpbGl0eSZxdW90OzomcXVvdDtwYXlhYmxlJnF1b3Q7LCZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7ZnVuY3Rpb24mcXVvdDt9LHsmcXVvdDthbm9ueW1vdXMmcXVvdDs6ZmFsc2UsJnF1b3Q7aW5wdXRzJnF1b3Q7Olt7JnF1b3Q7aW5kZXhlZCZxdW90Ozp0cnVlLCZxdW90O25hbWUmcXVvdDs6JnF1b3Q7YWRkciZxdW90OywmcXVvdDt0eXBlJnF1b3Q7OiZxdW90O2FkZHJlc3MmcXVvdDt9LHsmcXVvdDtpbmRleGVkJnF1b3Q7OmZhbHNlLCZxdW90O25hbWUmcXVvdDs6JnF1b3Q7YW1vdW50JnF1b3Q7LCZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7dWludDI1NiZxdW90O31dLCZxdW90O25hbWUmcXVvdDs6JnF1b3Q7dHJhbnNmZXImcXVvdDssJnF1b3Q7dHlwZSZxdW90OzomcXVvdDtldmVudCZxdW90O31dLAogICAgY29kZTogJzYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYxMDE0MTgwNjEwMDIwNjAwMDM5NjAwMGYzZmU2MDgwNjA0MDUyNjAwNDM2MTA2MTAwNDE1NzYwMDAzNTdjMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkwMDQ2M2ZmZmZmZmZmMTY4MDYzOTFhNmNiNGIxNDYxMDA0NjU3NWI2MDAwODBmZDViNjEwMDg5NjAwNDgwMzYwMzYwMjA4MTEwMTU2MTAwNWM1NzYwMDA4MGZkNWI4MTAxOTA4MDgwMzU3NGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2OTA2MDIwMDE5MDkyOTE5MDUwNTA1MDYxMDA4YjU2NWIwMDViODA3NGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NDY2OWZmZmZmZmZmZmZmZmZmZmZmZmZmMTYzNDYwNDA1MTYwNDA1MTgwODIwMzkwODM4NTg3ZjE1MDUwNTA1MDgwNzRmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjdmYWE2NTI4MWY1ZGY0YjRiZDNjNzFmMmJhMjU5MDViOTA3MjA1ZmNlMDgwOWE4MTZlZjhlMDRiNGQ0OTZhODViYjM0NjA0MDUxODA4MjgxNTI2MDIwMDE5MTUwNTA2MDQwNTE4MDkxMDM5MGEyNTA1NmZlYTE2NTYyN2E3YTcyMzA1ODIwMjNlOTY2OWRkNmZlYzNiNmIyYTg0YTFmZDdjOTkzOWY0OTE5NzIwM2QwZTFkYjMxMjI3OGU2MzNjMjE5YzI0ODAwMjknLAogICAgcmVzcG9uc2VMYXRlbmN5OiAyLAogICAgcGFyYW1zOiBbJ3ZpdGVfMTNmMWY4ZTIzMGYyZmZhMWUwMzBlNjY0ZTUyNTAzM2ZmOTk1ZDZjMmJiMTVhZjRjZjknXQp9KTsK"}}),e._v(" "),a("h3",{attrs:{id:"callcontract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#callcontract"}},[e._v("#")]),e._v(" callContract")]),e._v(" "),a("p",[e._v("Type of calling contract")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("toAddress: Address")]),e._v(" Address of contract")]),e._v(" "),a("li",[a("code",[e._v("abi: Object | Array<Object>")]),e._v(" ABI")]),e._v(" "),a("li",[a("code",[e._v("methodName?: string")]),e._v(" Name of method")]),e._v(" "),a("li",[a("code",[e._v("params?: any")]),e._v(" Passed-in parameters")]),e._v(" "),a("li",[a("code",[e._v("tokenId?: TokenId")]),e._v(" Token id. Default is "),a("code",[e._v("Vite_TokenId")])]),e._v(" "),a("li",[a("code",[e._v("amount?: BigInt")]),e._v(" Amount to send. Default is "),a("code",[e._v("0")])]),e._v(" "),a("li",[a("code",[e._v("fee?: BigInt")]),e._v(" Transaction fee. Default is "),a("code",[e._v("0")])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICd+QHZpdGUvdml0ZWpzJzsKY29uc3QgeyBDb250cmFjdHMsIFZpdGVfVG9rZW5JZCB9ID0gY29uc3RhbnQ7CgovLyAuLi4uCgpjb25zdCBhY2NvdW50QmxvY2sgPSBjcmVhdGVBY2NvdW50QmxvY2soJ2NhbGxDb250cmFjdCcsIHsKICAgIGFkZHJlc3M6ICd2aXRlXzU1MzQ2MmJjYTEzN2JhYzI5ZjQ0MGU5YWY0YWIyZTJjMWJiODI0OTNlNDFkMmJjOGIyJywKICAgIGFiaTogQ29udHJhY3RzLlJlZ2lzdGVyU0JQLmFiaSwKICAgIHRvQWRkcmVzczogQ29udHJhY3RzLlJlZ2lzdGVyU0JQLmNvbnRyYWN0QWRkcmVzcywKICAgIHBhcmFtczogWyBTbmFwc2hvdF9HaWQsIHNicE5hbWUsIGJsb2NrUHJvZHVjaW5nQWRkcmVzcyBdLAogICAgdG9rZW5JZDogVml0ZV9Ub2tlbklkLAogICAgYW1vdW50OiAnMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcKfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"registersbp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registersbp"}},[e._v("#")]),e._v(" registerSBP")]),e._v(" "),a("p",[e._v("Type of SBP registration")]),e._v(" "),a("p",[e._v("To register an SBP node, transferring 1m "),a("code",[e._v("VITE")]),e._v(" is required as stake. The transferred VITE will be locked for 7,776,000 snapshot blocks (about 3 months).")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account (register)")]),e._v(" "),a("li",[a("code",[e._v("sbpName: string")]),e._v(" Name of SBP")]),e._v(" "),a("li",[a("code",[e._v("blockProducingAddress: Address")]),e._v(" Block producing address")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgY29uc3RhbnQgfSBmcm9tICd+QHZpdGUvdml0ZWpzJzsKY29uc3QgeyBDb250cmFjdHMsIFZpdGVfVG9rZW5JZCB9ID0gY29uc3RhbnQ7CgovLyAuLi4uCgpjb25zdCBhY2NvdW50QmxvY2sgPSBjcmVhdGVBY2NvdW50QmxvY2soJ3JlZ2lzdGVyU0JQJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgc2JwTmFtZTogJ1RFU1RfTk9ERScsIAogICAgYmxvY2tQcm9kdWNpbmdBZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicKfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"updatesbpblockproducingaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updatesbpblockproducingaddress"}},[e._v("#")]),e._v(" updateSBPBlockProducingAddress")]),e._v(" "),a("p",[e._v("Type of updating SBP's block producing address")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account. Must be the same as original registration address of the SBP")]),e._v(" "),a("li",[a("code",[e._v("sbpName: string")]),e._v(" Name of SBP")]),e._v(" "),a("li",[a("code",[e._v("newBlockProducingAddress: Address")]),e._v(" New block producing address")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCd1cGRhdGVTQlBCbG9ja1Byb2R1Y2luZ0FkZHJlc3MnLCB7CiAgICBhZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICBzYnBOYW1lOiAnVEVTVF9OT0RFJywKICAgIG5ld0Jsb2NrUHJvZHVjaW5nQWRkcmVzczogJ3ZpdGVfODY5YTA2Yjg5NjNiZDVkODhhMDA0NzIzYWQ1ZDQ1ZjM0NWE3MWMwODg0ZTJjODBlODgnCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"revokesbp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revokesbp"}},[e._v("#")]),e._v(" revokeSBP")]),e._v(" "),a("p",[e._v("Type of cancelling SBP")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account. Must be the same as original registration address of the SBP")]),e._v(" "),a("li",[a("code",[e._v("sbpName: string")]),e._v(" Name of SBP")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdyZXZva2VTQlAnLCB7CiAgICBhZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICBzYnBOYW1lOiAnVEVTVF9OT0RFJwp9KTsK"}}),e._v(" "),a("h3",{attrs:{id:"withdrawsbpreward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withdrawsbpreward"}},[e._v("#")]),e._v(" withdrawSBPReward")]),e._v(" "),a("p",[e._v("Type of withdrawing SBP rewards")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account. Must be the same as original registration address of the SBP")]),e._v(" "),a("li",[a("code",[e._v("sbpName: string")]),e._v(" Name of SBP")]),e._v(" "),a("li",[a("code",[e._v("receiveAddress: Address")]),e._v(" Address to receive rewards")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCd3aXRoZHJhd1NCUFJld2FyZCcsIHsKICAgIGFkZHJlc3M6ICd2aXRlXzU1MzQ2MmJjYTEzN2JhYzI5ZjQ0MGU5YWY0YWIyZTJjMWJiODI0OTNlNDFkMmJjOGIyJywKICAgIHNicE5hbWU6ICdURVNUX05PREUnLAogICAgcmVjZWl2ZUFkZHJlc3M6ICd2aXRlXzU1MzQ2MmJjYTEzN2JhYzI5ZjQ0MGU5YWY0YWIyZTJjMWJiODI0OTNlNDFkMmJjOGIyJywKfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"voteforsbp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voteforsbp"}},[e._v("#")]),e._v(" voteForSBP")]),e._v(" "),a("p",[e._v("Type of voting for SBP")]),e._v(" "),a("p",[e._v("The balance of VITE in account will be used as voting weight")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("sbpName: string")]),e._v(" Name of SBP")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCd2b3RlRm9yU0JQJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgc2JwTmFtZTogJ1RFU1RfTk9ERScKfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"cancelvote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancelvote"}},[e._v("#")]),e._v(" cancelVote")]),e._v(" "),a("p",[e._v("Type of cancelling voting")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdjYW5jZWxWb3RlJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"stakeforquota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stakeforquota"}},[e._v("#")]),e._v(" stakeForQuota")]),e._v(" "),a("p",[e._v("Type of staking for quota")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("beneficiaryAddress: Address")]),e._v(" Address of staking beneficiary")]),e._v(" "),a("li",[a("code",[e._v("amount: BigInt")]),e._v(" Amount of VITE to stake, including decimals. A minimum amount of 134 is required. For example, staking 134 VITE, fill in "),a("code",[e._v("134000000000000000000")])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdzdGFrZUZvclF1b3RhJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgYmVuZWZpY2lhcnlBZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICBhbW91bnQ6ICcxMzQwMDAwMDAwMDAwMDAwMDAwMDAnCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"cancelquotastake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancelquotastake"}},[e._v("#")]),e._v(" cancelQuotaStake")]),e._v(" "),a("p",[e._v("Type of cancelling quota staking")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("beneficiaryAddress: Address")]),e._v(" Address of staking beneficiary")]),e._v(" "),a("li",[a("code",[e._v("amount: Uint256")]),e._v(" Amount of VITE to retrieve, including decimals. Cannot be less than 134 VITE. The remaining staking amount cannot be less than 134 VITE. For example, retrieving 134 VITE, fill in "),a("code",[e._v("134000000000000000000")])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdjYW5jZWxRdW90YVN0YWtlJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgYmVuZWZpY2lhcnlBZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICBhbW91bnQ6ICcxMzQwMDAwMDAwMDAwMDAwMDAwMDAnCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"issuetoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issuetoken"}},[e._v("#")]),e._v(" issueToken")]),e._v(" "),a("p",[e._v("Type of token issuance")]),e._v(" "),a("p",[e._v("An issuance fee of 1,000 VITE will be charged from the account of issuer, who will subsequently receive an amount of issued tokens equivalent to the total initial supply.\nToken has owner. The initial owner is token issuer.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account (token issuer)")]),e._v(" "),a("li",[a("code",[e._v("tokenName: string")]),e._v(" Name of token in 1-40 characters, including uppercase/lowercase letters, spaces and underscores. Cannot have consecutive spaces or start/end with space")]),e._v(" "),a("li",[a("code",[e._v("tokenSymbol: string")]),e._v(" Symbol of token in 1-10 characters, including uppercase/lowercase letters, spaces and underscores. Cannot use "),a("code",[e._v("VITE")]),e._v(", "),a("code",[e._v("VCP")]),e._v(" or "),a("code",[e._v("VX")])]),e._v(" "),a("li",[a("code",[e._v("decimals: Uint8")]),e._v(" Decimal places. Having $10^{decimals} \\leq totalSupply$")]),e._v(" "),a("li",[a("code",[e._v("maxSupply: Uint256")]),e._v(" Maximum supply. Mandatory for re-issuable token. Having $totalSupply \\leq maxSupply \\leq 2^{256}-1$. For non-reissuable token, fill in "),a("code",[e._v("0")])]),e._v(" "),a("li",[a("code",[e._v("totalSupply: Uint256")]),e._v(" Total supply. Having $totalSupply \\leq 2^{256}-1$. For re-issuable token, this is initial total supply")]),e._v(" "),a("li",[a("code",[e._v("isReIssuable: boolean")]),e._v(" If "),a("code",[e._v("true")]),e._v(", newly additional tokens can be minted after initial issuance")]),e._v(" "),a("li",[a("code",[e._v("isOwnerBurnOnly: boolean")]),e._v(" If "),a("code",[e._v("true")]),e._v(", the token can only burned by owner. Mandatory for re-issuable token. For non-reissuable token, fill in "),a("code",[e._v("false")])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdpc3N1ZVRva2VuJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgdG9rZW5OYW1lOiAndGVzdFRva2VuJywgCiAgICBpc1JlSXNzdWFibGU6IHRydWUsIAogICAgbWF4U3VwcGx5OiAnMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLCAKICAgIGlzT3duZXJCdXJuT25seTogZmFsc2UsIAogICAgdG90YWxTdXBwbHk6ICcxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnLCAKICAgIGRlY2ltYWxzOiAyLCAKICAgIHRva2VuU3ltYm9sOiAnVGVzdFQnCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"reissuetoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reissuetoken"}},[e._v("#")]),e._v(" reIssueToken")]),e._v(" "),a("p",[e._v("Type of reissuing token")]),e._v(" "),a("p",[e._v("Re-issuable token's owner can mint additional amount of tokens by re-issuance. Non applicable to non-reissuable token.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account (token owner)")]),e._v(" "),a("li",[a("code",[e._v("tokenId: TokenId")]),e._v(" Token id")]),e._v(" "),a("li",[a("code",[e._v("amount: BigInd")]),e._v(" Amount to mint, including decimals. For example, re-issuing 100 VITE, fill in "),a("code",[e._v("100000000000000000000")])]),e._v(" "),a("li",[a("code",[e._v("receiveAddress: Address")]),e._v(" Address to receive newly minted tokens")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdyZUlzc3VlVG9rZW4nLCB7CiAgICBhZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICB0b2tlbklkOiAneW91ciB0b2tlbklkJywgLy8gZWc6IHR0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAKICAgIGFtb3VudDogJzEwMCcsCiAgICByZWNlaXZlQWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInCn0pOwo="}}),e._v(" "),a("h3",{attrs:{id:"burntoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#burntoken"}},[e._v("#")]),e._v(" burnToken")]),e._v(" "),a("p",[e._v("Type of burning token")]),e._v(" "),a("p",[e._v("Re-issuable tokens can be burned by sending the amount of tokens to built-in token issuance contract. Non applicable to non-reissuable token.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account")]),e._v(" "),a("li",[a("code",[e._v("tokenId: TokenId")]),e._v(" Token id")]),e._v(" "),a("li",[a("code",[e._v("amount: BigInd")]),e._v(" Amount to burn, including decimals. For example, burning 100 VITE, fill in "),a("code",[e._v("100000000000000000000")])])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdidXJuVG9rZW4nLCB7CiAgICBhZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCiAgICB0b2tlbklkOiAneW91ciB0b2tlbklkJywgLy8gZWc6IHR0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAKICAgIGFtb3VudDogJzEwMCcKfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"disablereissuetoken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disablereissuetoken"}},[e._v("#")]),e._v(" disableReIssueToken")]),e._v(" "),a("p",[e._v("Type of changing re-issuable token to non-reissuable")]),e._v(" "),a("p",[e._v("Owner of re-issuable token can change the token to non-reissuable. Note: this action cannot be reversed")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account (owner)")]),e._v(" "),a("li",[a("code",[e._v("tokenId: TokenId")]),e._v(" Token id")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCdkaXNhYmxlUmVJc3N1ZVRva2VuJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgdG9rZW5JZDogJ3lvdXIgdG9rZW5JZCcgLy8gZWc6IHR0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAKfSk7Cg=="}}),e._v(" "),a("h3",{attrs:{id:"transfertokenownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfertokenownership"}},[e._v("#")]),e._v(" transferTokenOwnership")]),e._v(" "),a("p",[e._v("Type of transferring token's ownership. Only applicable to re-issuable tokens.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Parameters")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("__namedParameters: object")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address: Address")]),e._v(" Address of current account (owner)")]),e._v(" "),a("li",[a("code",[e._v("tokenId")]),e._v(": "),a("code",[e._v("string tokenId")]),e._v(" Token id")]),e._v(" "),a("li",[a("code",[e._v("newOwnerAddress")]),e._v(": "),a("code",[e._v("string address")]),e._v(" Address of new owner")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Return")])]),e._v(" "),a("ul",[a("li",[e._v("accountBlock instance")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Example")])])])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Y29uc3QgYWNjb3VudEJsb2NrID0gY3JlYXRlQWNjb3VudEJsb2NrKCd0cmFuc2ZlclRva2VuT3duZXJzaGlwJywgewogICAgYWRkcmVzczogJ3ZpdGVfNTUzNDYyYmNhMTM3YmFjMjlmNDQwZTlhZjRhYjJlMmMxYmI4MjQ5M2U0MWQyYmM4YjInLAogICAgdG9rZW5JZDogJ3lvdXIgdG9rZW5JZCcsIC8vIGVnOiB0dGlfNTY0OTU0NDUyMDU0NGY0YjQ1NGU2ZTQwCiAgICBuZXdPd25lckFkZHJlc3M6ICd2aXRlXzg2OWEwNmI4OTYzYmQ1ZDg4YTAwNDcyM2FkNWQ0NWYzNDVhNzFjMDg4NGUyYzgwZTg4Jwp9KTsK"}})],1)}),[],!1,null,null,null);s.default=c.exports}}]);