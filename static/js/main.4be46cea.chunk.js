(this.webpackJsonpcatfishfi=this.webpackJsonpcatfishfi||[]).push([[0],{35:function(e,t){e.exports={address:"0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",abi:[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(7),i=n(5),u=n.n(i),p=u.a.createContext(),s=function(e){var t=e.children,n=Object(i.useState)(!1),s=Object(a.a)(n,2),r=s[0],y=s[1];function o(){y(!r)}function d(){y(!1)}var l=Object(i.useMemo)((function(){return{isSidebarOpen:r,toggleSidebar:o,closeSidebar:d}}),[r]);return u.a.createElement(p.Provider,{value:l},t)}},49:function(e,t,n){"use strict";var a=n(5),i=n.n(a);t.a=function(){return i.a.createElement("div",{className:"w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900"},"Loading...")}},57:function(e,t,n){e.exports=n(79)},67:function(e,t){},75:function(e,t){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),u=n(33),p=n.n(u),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=n(39),o=n(2),d=n.n(o),l=(n(34),n(7)),m=n(18),c=n(30),T=n(8),b=n(26),f=n(35),v=n.n(f);var w,M=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],u=t[1],p=Object(T.g)();return Object(a.useEffect)((function(){p.pathname.slice(1)?setTimeout((function(){return u("Navigated to ".concat(p.pathname.slice(1)," page."))}),500):u("")}),[p]),i.a.createElement("span",{className:"sr-only",role:"status","aria-live":"polite","aria-atomic":"true"},n)},x=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,96))})),h=new b.a.providers.JsonRpcProvider("https://rpc.polycat.finance/"),O=new b.a.Contract("0x95146d02fDb2f3f3507f72F881016A3380D83435",[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"accounts",type:"address[]"},{indexed:!1,internalType:"bool",name:"isExcluded",type:"bool"}],name:"ExcludeMultipleAccountsFromFees",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!0,internalType:"bool",name:"earlyParticipant",type:"bool"},{indexed:!1,internalType:"uint256",name:"numberOfBuyers",type:"uint256"}],name:"FixedSaleBuy",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address[]",name:"participants",type:"address[]"}],name:"FixedSaleEarlyParticipantsAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"newValue",type:"uint256"},{indexed:!0,internalType:"uint256",name:"oldValue",type:"uint256"}],name:"GasForProcessingUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newLiquidityWallet",type:"address"},{indexed:!0,internalType:"address",name:"oldLiquidityWallet",type:"address"}],name:"LiquidityWalletUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"iterations",type:"uint256"},{indexed:!1,internalType:"uint256",name:"claims",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lastProcessedIndex",type:"uint256"},{indexed:!0,internalType:"bool",name:"automatic",type:"bool"},{indexed:!1,internalType:"uint256",name:"gas",type:"uint256"},{indexed:!0,internalType:"address",name:"processor",type:"address"}],name:"ProcessedDividendTracker",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"SendDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"pair",type:"address"},{indexed:!0,internalType:"bool",name:"value",type:"bool"}],name:"SetAutomatedMarketMakerPair",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethReceived",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensIntoLiqudity",type:"uint256"}],name:"SwapAndLiquify",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldAddress",type:"address"}],name:"UpdateDividendTracker",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newAddress",type:"address"},{indexed:!0,internalType:"address",name:"oldAddress",type:"address"}],name:"UpdateUniswapV2Router",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"automatedMarketMakerPairs",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"dividendTokenBalanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"dividendTracker",outputs:[{internalType:"contract CatFishDividendTracker",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"bool",name:"excluded",type:"bool"}],name:"excludeMultipleAccountsFromFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"fishToken",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gasForProcessing",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAccountDividendsInfo",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"getAccountDividendsInfoAtIndex",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"int256",name:"",type:"int256"},{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getClaimWait",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastProcessedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getNumberOfDividendTokenHolders",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalDividendsDistributed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromFees",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"liquidityWallet",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSellTransactionAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"gas",type:"uint256"}],name:"processDividendTracker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardsFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"sellFeeIncreaseFactor",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"pair",type:"address"},{internalType:"bool",name:"value",type:"bool"}],name:"setAutomatedMarketMakerPair",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swapTokensAtAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"claimWait",type:"uint256"}],name:"updateClaimWait",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"updateDividendTracker",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newValue",type:"uint256"}],name:"updateGasForProcessing",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAddress",type:"address"}],name:"updateUniswapV2Router",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"withdrawableDividendOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],h),g=new b.a.Contract(v.a.address,v.a.abi,h),k="0x3a3df212b7aa91aa0402b9035b098891d276572b",E=18,j="0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",A=18,S="0x2791bca1f2de4661ed88a30c99a7a9449aa84174",F=18;function I(e,t){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.functions.getAmountsOut(t,n,{gasLimit:1e12});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",1);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("".concat(1*Math.pow(10,A)),[j,S]);case 2:return t=e.sent,n=Number(t.amounts[1].toString())/Math.pow(10,F),e.abrupt("return",1e12*n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("".concat(1*Math.pow(10,E)),[k,S]);case 2:return t=e.sent,n=Number(t.amounts[1].toString())/Math.pow(10,F),e.abrupt("return",1e12*n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],u=t[1],p=Object(a.useState)(0),s=Object(l.a)(p,2),r=s[0],y=s[1],o=Object(a.useState)(0),d=Object(l.a)(o,2),m=d[0],f=d[1],v=Object(a.useState)(0),g=Object(l.a)(v,2),k=g[0],E=g[1],j=Object(a.useState)(0),A=Object(l.a)(j,2),S=A[0],F=A[1],I=Object(a.useState)(0),P=Object(l.a)(I,2),B=P[0],L=P[1],V=Object(a.useState)(0),N=Object(l.a)(V,2),C=N[0],U=N[1],R=Object(a.useState)([]),_=Object(l.a)(R,2),G=_[0],J=(_[1],Object(a.useState)(0)),z=Object(l.a)(J,2),K=z[0],$=z[1],Q=Object(a.useState)(0),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],ee=Object(a.useState)(0),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ie=Object(a.useState)(0),ue=Object(l.a)(ie,2),pe=ue[0],se=ue[1],re=Object(a.useState)(0),ye=Object(l.a)(re,2),oe=ye[0],de=ye[1],le=Object(a.useState)(!0),me=Object(l.a)(le,2),ce=me[0],Te=me[1],be=Object(a.useState)(!0),fe=Object(l.a)(be,2),ve=fe[0],we=fe[1],Me=Object(a.useState)(!0),xe=Object(l.a)(Me,2);xe[0],xe[1];var he=Object(a.useState)(localStorage.getItem("address")||""),Oe=Object(l.a)(he,2),ge=Oe[0],ke=Oe[1];Object(a.useEffect)((function(){(function(){return H.apply(this,arguments)})().then(F),function(){return D.apply(this,arguments)}().then(E),function(){return W.apply(this,arguments)}().then(U),function(){return q.apply(this,arguments)}().then(L)}),[]),Object(a.useEffect)((function(){b.a.utils.isAddress(ge)&&(localStorage.getItem("address")!==ge&&localStorage.setItem("address",ge),Ee(ge))}),[ge,ce]),Object(a.useEffect)((function(){O.getTotalDividendsDistributed().then((function(e){y((e/1e18).toFixed(2)),setTimeout((function(){we(!ve)}),5e3)}))}),[ve]);var Ee=function(){O.getNumberOfDividendTokenHolders().then((function(e){O.balanceOf(ge).then((function(t){$((t/1e18).toFixed(0)),O.getAccountDividendsInfo(ge).then((function(t){h.getBalance(ge).then((function(n){f((n/1e18).toFixed(4)),Z(parseInt(t[4]._hex,16)-parseInt(t[3]._hex,16)),ae(1e3*parseInt(t[5]._hex,16)),se((100-parseInt(t[2]._hex,16)/parseInt(e._hex,16)*100).toFixed(0)),de((parseInt(t[3]._hex,16)/1e18).toFixed(4)),window.clearTimeout(w),w=window.setTimeout((function(){Te(!ce)}),9e3)}))}))}))}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement(M,null),i.a.createElement(T.c,null,i.a.createElement(T.a,{path:"/",render:function(e){return i.a.createElement(x,Object.assign({},e,{tikiPrice:S,address:ge,setAddress:ke,holdings:K,setHoldings:$,paid:Y,setPaid:Z,lastPaid:ne,setLastPaid:ae,nextPayoutProgress:pe,setNextPayoutProgress:se,totalPaid:r,nextPayoutValue:oe,setNextPayoutValue:de,bnbHoldings:m,bnbPrice:k,highestBuyers:G,wallet:n,setWallet:u,tikiVolume:C,setTikiVolume:U,fishPrice:B}))}}))))},L=n(40),V=n(49);n(78);p.a.render(i.a.createElement(L.b,null,i.a.createElement(a.Suspense,{fallback:i.a.createElement(V.a,null)},i.a.createElement(y.Windmill,{usePreferences:!0,dark:!0},i.a.createElement(B,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}}({onUpdate:function(e){e&&e.waiting&&e.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload()}})}},[[57,1,2]]]);
//# sourceMappingURL=main.4be46cea.chunk.js.map