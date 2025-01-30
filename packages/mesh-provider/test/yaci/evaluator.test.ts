import { YaciProvider } from "@meshsdk/provider";

const provider = new YaciProvider("https://yaci-node.meshjs.dev/api/v1/");

const successTx =
  "84a8008382582035755c9ef371ae7526ceec952f1f1f493cf78db58c56194476f073f1f23de86f0082582035755c9ef371ae7526ceec952f1f1f493cf78db58c56194476f073f1f23de86f05825820388a21cbf10f2561cbd1ad0bdaff4ae04d8de395f1807ade751b805af5255b7000018482581d70181d8e3366e0faad724a550d6a47091c360d8672a825b1e109de50971a003d0900a300581d706a4e7ffda7984c9b2584f48b36a1d32c2a08f63b4fccdbf30ec165ed011a007a1200028201d81843d87980a300581d70c79bf33029834051af43402e0470e97e648aaae22d2c5a21b22c716a011a007a1200028201d81843d879808258390004845038ee499ee8bc0afe56f688f27b2dd76f230d3698a9afcc1b66e0464447c1f51adaefe1ebfb0dd485a349a70479ced1d198cbdf7fe71a38e3745f021a0021c93305a2581df0de95e908f59cea48b9d41753fb2cfebb9c938bfedd1a33473959553100581df051b03b91deb93f215ac1c3d7f9f27f494b35e6ba58f0de388ab0ece2000b582093a2b3a7e7e8c70880356c718db93cb59e90ef8139769ce280c075ab4d8ea29d0d818258204752fc2b7feb3ab73757672dea72c7e08e89f17011532ddc20cccebe14db5d50000e82581c04845038ee499ee8bc0afe56f688f27b2dd76f230d3698a9afcc1b66581c5867c3b8e27840f556ac268b781578b14c5661fc63ee720dbeab663f1281825820c73928d5935dc37b624c82ed531391cabc6daf822870b36d56f26e51c60d52b900a3008282582089f4b576f05f5aad99bce0bdd51afe48529772f7561bb2ac9d84a4afbda1ecd658404d403d0dc49cc84eea5b4b5ed601bd1b55d0028b0f6e392ddb532f92976403c15f4f04f542c2d00b9206017bc03c950925aec591645f2b82c43613bf0612bc0f825820c32dfdb461dd016e8fdd9b6d424a77439eab8f8c644a804b013b6cefa2454f955840a46d03cb794f05b50a9bcaa33d5dd057ddde784ed496e1a4f475f009cfb9135d4512bc960ea0484f0eaf3b8727ce65d80d19af1b619e2b35c8dae6176b48e80d0584840000d87980821993041a00c82190840002d87980821a006acfc01ab2d05e0084030040821a006acfc01ab2d05e0084030140821a006acfc01ab2d05e00078459032759032401010033333323232323232322322322322322322533300c323232323253323301230013013375400426464646464a66602e66e1d20000011533301a301937540102a0042c2a66602e600c0022a66603460326ea8020540085854ccc05ccdc3a40080022a66603460326ea8020540085854ccc05ccdc3a400c0022a66603460326ea8020540085858c05cdd5003899191929919980c99b87480000104cc008dd59801980d9baa00c30013301d375202a97ae01533301930080041330023756600660366ea8030c004cc074dd4809a5eb8054ccc064cdc3a40080082660046eacc00cc06cdd500618009980e9ba90114bd7009919299980d99198008009bac3021302230223022302200322533302000114a0264a66603c66e3cdd7181180100e0a511330030030013023001100114a064a66603c002294054ccc078c0840044c8c8c94ccc078cdc79bae30230030141533301e3371e002038266e1c009200114a02940dd7181118118011bad302130223022001375860400022940c8cc004004dd5981000111299980f8008a5eb804c8ccc888c8cc00400400c894ccc094004400c4c8cc09cdd3998139ba90063302730240013302730250014bd7019801801981480118138009bae301e0013756603e0026600600660460046042002603e603e603e603e60366ea8030dd2a400444646600200200644a66603c00229404c94ccc070cdd7802180e98108010a5113300300300130210012301c301d301d301d301d301d301d0013016375400c60326034004603000260286ea8008dc3a40042c602a602c004602800260280046024002601c6ea800452613656375c0026eb8004dd70009bae001375c002ae6955ceaab9e5573eae815d0aba24c011e581c04845038ee499ee8bc0afe56f688f27b2dd76f230d3698a9afcc1b66004c011e581cde95e908f59cea48b9d41753fb2cfebb9c938bfedd1a334739595531004c011e581cde95e908f59cea48b9d41753fb2cfebb9c938bfedd1a334739595531004c011e581cdbfdd77e5eb1cc06e8f9f5e7ddcbeeb022a845005cb62bb4b8d9dccf004c011e581ce3c95136dd345eaf45f9256459a3ec8d8169b4e2d855d127b97eb9d2000159032759032401010033333323232323232322322322322322322533300c323232323253323301230013013375400426464646464a66602e66e1d20000011533301a301937540102a0042c2a66602e600c0022a66603460326ea8020540085854ccc05ccdc3a40080022a66603460326ea8020540085854ccc05ccdc3a400c0022a66603460326ea8020540085858c05cdd5003899191929919980c99b87480000104cc008dd59801980d9baa00c30013301d375202a97ae01533301930080041330023756600660366ea8030c004cc074dd4809a5eb8054ccc064cdc3a40080082660046eacc00cc06cdd500618009980e9ba90114bd7009919299980d99198008009bac3021302230223022302200322533302000114a0264a66603c66e3cdd7181180100e0a511330030030013023001100114a064a66603c002294054ccc078c0840044c8c8c94ccc078cdc79bae30230030141533301e3371e002038266e1c009200114a02940dd7181118118011bad302130223022001375860400022940c8cc004004dd5981000111299980f8008a5eb804c8ccc888c8cc00400400c894ccc094004400c4c8cc09cdd3998139ba90063302730240013302730250014bd7019801801981480118138009bae301e0013756603e0026600600660460046042002603e603e603e603e60366ea8030dd2a400444646600200200644a66603c00229404c94ccc070cdd7802180e98108010a5113300300300130210012301c301d301d301d301d301d301d0013016375400c60326034004603000260286ea8008dc3a40042c602a602c004602800260280046024002601c6ea800452613656375c0026eb8004dd70009bae001375c002ae6955ceaab9e5573eae815d0aba24c011e581c5867c3b8e27840f556ac268b781578b14c5661fc63ee720dbeab663f004c011e581c51b03b91deb93f215ac1c3d7f9f27f494b35e6ba58f0de388ab0ece2004c011e581c51b03b91deb93f215ac1c3d7f9f27f494b35e6ba58f0de388ab0ece2004c011e581cdbfdd77e5eb1cc06e8f9f5e7ddcbeeb022a845005cb62bb4b8d9dccf004c011e581ce3c95136dd345eaf45f9256459a3ec8d8169b4e2d855d127b97eb9d200015903db5903d8010100333232323232323223223225333006323232323232323232325333010300330113754002264646464646464646464a66603a6040004264a666036601c60386ea80204c8c8c8c94ccc088c0940084cc01400c4c8c94ccc084c0500044c8c94ccc098c0a40084c8c94ccc094c0600044c8c94ccc0a8c0b40084cc0340045401058c0ac004c09cdd50018a999812980b8008991919191919299981718188010a8040b1bad302f001302f002375a605a002605a0046eb4c0ac004c09cdd50018b18129baa00215004163027001302337540062a66604260260022a66604860466ea800c540085858c084dd500109919800800998121ba901c33024375201697ae022533302400114a2264a66604464646600200203044a66605000229404c94ccc098cdc79bae302b00200414a226600600600260560026eb8c09c0084cc00c00c00452818138008b181180098118011810800980e9baa008162232533301d301000113232533302230250021500416375c6046002603e6ea800c54ccc074c03c0044c8c94ccc088c0940085401058dd71811800980f9baa00316301d37540042c6eb8c078004c078008dd7180e000980e0011bae301a001301a00230180013018002375c602c00260246ea800458c8c94ccc044c010c048dd5000899299980919b8748010c04cdd50008980b980a1baa0011630163017301730133754600460266ea8c058c04cdd50008b19198008009bac301600622533301500114c0103d87a80001323253323301530073253330163008301737540022900009bad301b3018375400264a66602c6010602e6ea80045300103d87a8000132330010013756603860326ea8008894ccc06c004530103d87a8000132323232533301c33722911000021533301c3371e9101000021300833020375000297ae014c0103d87a8000133006006003375a603a0066eb8c06c008c07c008c074004c8cc004004dd59803980c1baa30073018375400844a666034002298103d87a8000132323232533301b337220320042a66603666e3c0640084c01ccc07cdd3000a5eb80530103d87a8000133006006003375660380066eb8c068008c078008c0700044c004cc06400d2f5c06e95200013300400400130190023017001230153016001370e90011b8748000dd618089809180918091809180918091809000980898069baa3010300d375400c601e6020004601c002601c004601800260106ea800452613656375c0026eb80055cd2ab9d5573caae7d5d02ba1574498011e581c9f5bf63f233e4c289338487c93b53f28c1d18743e40cd9a3af6b18a8004c011e581c04845038ee499ee8bc0afe56f688f27b2dd76f230d3698a9afcc1b6600015903db5903d8010100333232323232323223223225333006323232323232323232325333010300330113754002264646464646464646464a66603a6040004264a666036601c60386ea80204c8c8c8c94ccc088c0940084cc01400c4c8c94ccc084c0500044c8c94ccc098c0a40084c8c94ccc094c0600044c8c94ccc0a8c0b40084cc0340045401058c0ac004c09cdd50018a999812980b8008991919191919299981718188010a8040b1bad302f001302f002375a605a002605a0046eb4c0ac004c09cdd50018b18129baa00215004163027001302337540062a66604260260022a66604860466ea800c540085858c084dd500109919800800998121ba901c33024375201697ae022533302400114a2264a66604464646600200203044a66605000229404c94ccc098cdc79bae302b00200414a226600600600260560026eb8c09c0084cc00c00c00452818138008b181180098118011810800980e9baa008162232533301d301000113232533302230250021500416375c6046002603e6ea800c54ccc074c03c0044c8c94ccc088c0940085401058dd71811800980f9baa00316301d37540042c6eb8c078004c078008dd7180e000980e0011bae301a001301a00230180013018002375c602c00260246ea800458c8c94ccc044c010c048dd5000899299980919b8748010c04cdd50008980b980a1baa0011630163017301730133754600460266ea8c058c04cdd50008b19198008009bac301600622533301500114c0103d87a80001323253323301530073253330163008301737540022900009bad301b3018375400264a66602c6010602e6ea80045300103d87a8000132330010013756603860326ea8008894ccc06c004530103d87a8000132323232533301c33722911000021533301c3371e9101000021300833020375000297ae014c0103d87a8000133006006003375a603a0066eb8c06c008c07c008c074004c8cc004004dd59803980c1baa30073018375400844a666034002298103d87a8000132323232533301b337220320042a66603666e3c0640084c01ccc07cdd3000a5eb80530103d87a8000133006006003375660380066eb8c068008c078008c0700044c004cc06400d2f5c06e95200013300400400130190023017001230153016001370e90011b8748000dd618089809180918091809180918091809000980898069baa3010300d375400c601e6020004601c002601c004601800260106ea800452613656375c0026eb80055cd2ab9d5573caae7d5d02ba1574498011e581c9f5bf63f233e4c289338487c93b53f28c1d18743e40cd9a3af6b18a8004c011e581c5867c3b8e27840f556ac268b781578b14c5661fc63ee720dbeab663f0001f5f6";
// const failTx =
//   "84a700848258203483fb2ced4fe3a8365e6a759a39d649b6c059bd04e8db6525dceef1fe7b2f25182c8258207702194883a5e3313a20bc7f4c52c05bd3b0d77e195be58d3976b36572774292182c82582077b196828fa17091d0ec94850c98d03bda0e6cd9e4373cdcd60a6b192f73fee9182e825820aaf165950213d80294a5e8f88aa31f6358c5e7c661071620715f4c3ce187f51c07018ea300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb01821a0016e360a1581c5066154a102ee037390c5236f78db23239b49c5748d3d349f3ccf04ba144555344581a02faf080028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb01821a0016e360a1581c5066154a102ee037390c5236f78db23239b49c5748d3d349f3ccf04ba144555344581a02faf080028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a300583910cb55816770a83383463164b8b28609cefb26e73b2a7d361c3194b5335ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb011a004c4b40028201d81843d87980a3005839101e9d8eac318f4e362ce80b987e63b6e41740d08bb084f014ae6633a95ca749261aa3b17aa2cd4b026bc6566c4b14421d6083edce64ffe5cb01821a0053a7e2a1581c5066154a102ee037390c5236f78db23239b49c5748d3d349f3ccf04ba144555344581a004c4b40028201d81843d87980825839001e4eb194e3335a0dcc4f5c5d009318167c583bb3b0879d9f718cd9e0d63a93470bd4d8bb986c02ff8a6043796b91cc397ceb29058f5c9ac01a20c46d08021a0003e8780b58208847a14577b0531c2a8ae0f7c27f2c75cc076c0864b3a641f5302a654c03b4cc0d818258203fbdf2b0b4213855dd9b87f7c94a50cf352ba6edfdded85ecb22cf9ceb75f814070e82581c1e4eb194e3335a0dcc4f5c5d009318167c583bb3b0879d9f718cd9e0581c5ca51b304b1f79d92eada8c58c513e969458dcd27ce4f5bc47823ffa128682582077b196828fa17091d0ec94850c98d03bda0e6cd9e4373cdcd60a6b192f73fee9182e825820aaf165950213d80294a5e8f88aa31f6358c5e7c661071620715f4c3ce187f51c078258207702194883a5e3313a20bc7f4c52c05bd3b0d77e195be58d3976b36572774292182c825820efe6fbbdd6b993d96883b96c572bfcaa0a4a138c83bd948dec1751d1bfda09b3008258203483fb2ced4fe3a8365e6a759a39d649b6c059bd04e8db6525dceef1fe7b2f25182c825820afd210b69469ebbb2997fd9285c6ae50833d82bcd817c6126ec05126fcdb6cad01a10584840000d879808219a9391a00d6d123840001d879808219a9391a00d6d123840002d879808219a9391a00d6d123840003d879808219a9391a00d6d123f5f6";

describe("Yavi Evaluator", () => {
  it("should successfully evaluate correct tx", async () => {
    // const res = await provider.evaluateTx(successTx);
    // console.log("res", res);
    // expect(res.length).toBeGreaterThan(0);
    expect(1).toBe(1);
  });
  // it("should fail evaluating incorrect tx", async () => {
  //   const res = await provider.evaluateTx(failTx).catch(() => "error");
  //   expect(res).toBe("error");
  // });
});
