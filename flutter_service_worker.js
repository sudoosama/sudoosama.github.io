'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "69a904ac9adfbefaa69a720e4c13780a",
".git/config": "b1cd06aaf42a91f16107c72a56af6c05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "13a40d65f750835fc6bcbb6e49ab5800",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09175ef7b6bf5d0187b75de696ffd131",
".git/logs/refs/heads/main": "90dfcae5a7e9e3ab1b4349e4abb16881",
".git/logs/refs/heads/master": "8f44260bcb378998d4f973380ee196d9",
".git/logs/refs/remotes/origin/main": "a0131c345427ba7b9a4052260e684576",
".git/objects/00/585c4a557947dc62a687bcece887755de1b0ea": "a83d0de0f2a4c41594e17a81f0203711",
".git/objects/01/c9c98340a3d18a1289aee9260f4d79efbf8ee8": "b9dc66f64409f77d774108cfdf193b35",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/03/8dc60f2995a6f34fe0d4926b1f872468c63f6f": "d5ce9e494cbf1d697f4a6a556ea00e2c",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/09/2218c35c707f8acb517feaa348fa5d2dc419f0": "9228eaf4e6a7c9e975d3442e1db12db0",
".git/objects/09/3bfa2f2edfc3e82be9fbebbd05677056e5e4d6": "d76eb11250b7c20b6876e752ef077f53",
".git/objects/0a/19da576c1c327bce00e28745ada6424b3f23da": "d9f580a0cd7acc86c2d1ef3a2c0e77df",
".git/objects/12/d6b82405257aa80e9fc0dcbf2d904abd49df71": "ed5a52b70614c5501b551838f1083a78",
".git/objects/13/5a3bec248d98fb478c2b9106a05e96cd6f5fa9": "8d3da3f39cf46fb7aa945ea7c5c4ed35",
".git/objects/17/8c3f1d90d96a494c0854acf9bfe734626c74d1": "3573d0abf65719021bb8af8c717e3c62",
".git/objects/18/40e01c58d82cb78c7d9be1a22d85639591bc5d": "1997eca01bcae9b26b691be75f65df3d",
".git/objects/1a/2b33950529a85dafdd92a2bb92fcdb262bdeaa": "f0559bfb6df1f53824ec073a3e0553cd",
".git/objects/1a/3855aa035a49e7e7d223a86e49bc94c88d2a06": "aec72d790e9879289f826f6218734023",
".git/objects/1c/f52677642eb14b004541dfc47a5ed77c7fe399": "e6d2b974f81462dc4952dcc579f78ef9",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/1f/5f48a5e5b3948bcc3fc805762902b62a115a3f": "9507bb4413ace604ee0db6147576abd4",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/24/164b5976c59a8656c23bc47a3c6368ead06805": "ade9fa611a5c574671e59a09bdadf52b",
".git/objects/2b/66646167bdc8368d816f07cf7929edd50492ee": "ac7e4bebeb8738556034a019bfad8240",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/2f/a0b9a31488909dc11f384d0d61e5d26c743e42": "4cc4d149eb4e260cac5be6249d6138ee",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/6eb352836acc173ff314f90ba8cb3eb691faa8": "a99039138e0cef60869c905de7735c65",
".git/objects/33/861b581ebd82a5378da7ef21413358f6674ec0": "2e671a3c1a8b40bf20eea85f6ff969d3",
".git/objects/33/cce270c89fe6cd0f0ff1ecbf4e913116d5295e": "18246700aa340d824897f6714ccb65db",
".git/objects/35/6e1279dfe774adeaff176ff3140765dc20c26c": "c6cf5ad4e94386ea06c4c141d04b1f2d",
".git/objects/38/130dae6bc6e4502432ffe6888c08d18574c385": "06c81e1e941a3fe74495944af07a9527",
".git/objects/39/ed42e0b5923574420bc1f1605b5c1a4bce62c3": "dce5a850e4a208edd89266e88e52766a",
".git/objects/3c/398381abc1ba175ce1fa7252ff2a679034837c": "dcf77d78b131c5a10a48a7f0084072cc",
".git/objects/3c/6ccc2cc8ef5329ffa56c163ca6a8c8d7d68673": "4a26548d8f3bdc31f3b79343fbe4075b",
".git/objects/3f/094a198e42895dc32a74d90935ac37f67fe0b8": "ac517b8d54aa14987818e01d44123240",
".git/objects/40/213525e970b42ecc62ec06599a6ef823de47d8": "3c89d717ce725171f688602173c0108c",
".git/objects/40/91264ee1c08d70ea986bea2f9db19195e64337": "a60fc3a6a3d8b8ebc64178dd2603ecf7",
".git/objects/41/18743ea8540705b23f2f3039141c2a40505a07": "846a02f6af59bd059f6d599d3dfb27aa",
".git/objects/41/1d80cb302bb4bc63218000c68a020f250cb9b5": "1d3a47b6ef03d744c093d489fd3776a3",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/44/4f62f9d7c3170686ce7403f773be2afef3dfb1": "155a30a80a3bacc91e69ecbd0b03634e",
".git/objects/44/e610b02bd6a0e414f203820e669a2fde0258d9": "325948974d5cf6281d9bccd9feebd08d",
".git/objects/47/b8cc37775cfbaf144eff995f60035b755fcaee": "e8f2c0b4d8d73729e2dd96a2a204f757",
".git/objects/4c/b39f5b1d4649991c7b4e17f474df1c78558fac": "bd818778b913dda66c5b5cb5ae6a080a",
".git/objects/4d/7c7dc9d1f8fa0973fa84bfab18498470fec54e": "e8dc74a936bf1592a9db603aafa57078",
".git/objects/52/46ea05a5d23e0f7654637dc6f9a9f4a41088cc": "3b50cd4cb9f939c092ffaa96d08b7901",
".git/objects/52/90e8e4f0aaefb4c92fb38e40cab957f0fd4588": "3f5f0d611d92e21e445e63e22e6df83c",
".git/objects/55/bc17d809b537738874e350255894b838cc9135": "3cfba8edee49963aa53e60b3ff3767ca",
".git/objects/57/02982972820d6c1b92695356eb876589e40b9f": "3430dbd0e172beb21cbb0d7cd301cbf3",
".git/objects/5b/1d7595446ff89181833d58ee8dba43e892d5af": "767aa5010419db6c888eef4ba9416516",
".git/objects/5b/236a6354a92d08b97b77e3a351b58c9b6f196c": "849dd01a57b53bda5762e02e38263c38",
".git/objects/5b/a406515246b5f6e4600155907b57a50b8f01e2": "48ef350a835af523836d9f6c1864ddd9",
".git/objects/5d/6d9652b454c34c45b592fc4e7b3dcfb8485356": "b9427afbb97eb8e6e784c3ec63298ca2",
".git/objects/5d/e0abfe7c9420d68998664d68e3c02faf9e98e6": "bdafc81131f41b889def5d6daf685601",
".git/objects/5e/da246a47dc4de3e88225ae2b185b9a9ec4a1c3": "61a3b99582ca81c2f84a5540bd98f64d",
".git/objects/5f/6ec365d7b8d2d32df3f25e2e0e03a5720bf28c": "385e42b8e9005fde956c6b178b667b03",
".git/objects/63/1d4047737f97e04a5eb489fc04215b21d52134": "2334028c51fe574df5fa77e0651eed18",
".git/objects/64/6f500562f3ef30494d2795faf06113070f5a1e": "de107af9e063cd69366c14cacb1b3b9a",
".git/objects/67/320b0402016c756f8948b8de28d63a87f9c923": "50ef278059b326201291c629b203368f",
".git/objects/67/52d4a18113fd7a9f34cea1a7326cdd26badf19": "0b85e139da3d30304394f6e49470ce16",
".git/objects/69/4ae195490d89b07aeb9f81303ab851ebf3ed2a": "06ca3a3ea68043e1b6c3e4d8541aca4a",
".git/objects/69/64b8d5f76175cf6855ff0f92f136732f1abbb8": "971d5315eadc74da2d73c4641f2a0ac6",
".git/objects/69/918903b6c738178f48cf46a60afa2ed526f46c": "96c30636ae6839429d82994fe53ae4a6",
".git/objects/6a/39b5e1b354f0f46f41da9f66c71ab6babf3fdc": "a411116f0d12d784f0f9d9bc26902310",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/6f/4ffab42c5f3f0dab892c3cb2db606d6426f53c": "53a69c8f1c210cb2a3cfa372f46bd314",
".git/objects/74/87754b43a36cf1e32ba80d8e21e4f64bef39a2": "da98ec4b9f5d75391a3d71606e5565fd",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/34759fda65d08e609cdd381f5145ff24d68f7c": "5a8ff523e9f293a5daa50d562e7b65ae",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/7d/d63f09dfd543d5ac9cd1f83ab02d0d17c6bce6": "147b43be14c05515e4f4e83df7862378",
".git/objects/7d/f3ddf5578d414d8a9bec87b7ce58f478641187": "f535b8fbd01fa5a6a58d434d52423d07",
".git/objects/7e/570bc09e07e8a99dfeaf26afd12f4aceeb7d29": "7dec842a279d8d36486c3800989669d6",
".git/objects/7f/8168823b2e761bfc215b4e573083e790eab9d7": "e3d064f5cd40159d0f5bc6cdb07956f8",
".git/objects/81/374692f900a94b3ba83ad0bb3837f72b34c5f4": "efc7feffe18849046864ecb98f1a7499",
".git/objects/81/64ccad6ecf6f5fe77ef2ba13f06b2b191ce48d": "00959fc04412af7abde17100c64535d3",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/83/6c780ca7ec29b7c7d2505009d85e8b2f4c26b1": "e54572b22d3ec867696b108771e9d94f",
".git/objects/86/21dd6270f5eb5282b5cf3757fcd064535b382a": "237e9fb8de36cb30ae1737bcc870d189",
".git/objects/8a/058ef508751a91ea2ebfe0e4c99a3ba77c0996": "025cea70ec43c79cef94802fcd1eda6a",
".git/objects/8a/3c0ef6fd4ac971580dee4cd14bf0bcc3a17019": "d7fc39530d25a7488033f55fe787f3e3",
".git/objects/8b/29442bae816f67bd2ccfe0c46bfeb0d70419c9": "560ae2f4e832208cc99e878a1433be4e",
".git/objects/8b/30e53606c395cc055a75f2c72644fed1c95e7e": "79b7af0fd15c2b2aaea0ecffbb84e656",
".git/objects/8d/2cca964542d7e8a3236bdba3464aea4e5a68b9": "9a48b94b92fa1cec79fd2d3ae9577bb3",
".git/objects/8e/a92bfcb0a4ff1a549530b51e2376b6035d3332": "77f41b883db250d5d2eb9d9313140bf5",
".git/objects/8f/b2db825ac08f47c8d3b4a57f3bb12267decaf6": "80939d5d31336e74b29da78d41b2c1b8",
".git/objects/92/0e0fc0a7190bda847c22a705e9751e8ff305dd": "47dd79476839b9c2f398e69b17520bbd",
".git/objects/92/1c700e6e9b819ec586fdeb0d7efafe58282193": "d8f9d76c122b4f01a60a9d7f4828c998",
".git/objects/92/4be1bd2ebb96311b427463aa98cae27aa77188": "190b5f737ec4d491d1b0d7dc5e7ea00d",
".git/objects/92/788eed4a3b65922be0f8d6abe177ffaf976842": "ff2438048b5b17fb37d5224acf9f2e94",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/95/76770684736e6efb7b04aa7e0578b32e95a593": "4d7938c9d9efc31b00d44eea4e0622da",
".git/objects/96/125180285f7dd2008f90f03fce3f4c4de50ba8": "128ab3fec40348f6ace042809950c089",
".git/objects/97/44267443a168758856c117a443e3bf4a80fc33": "86529e188e6d2015fbd7fdfb6e0dc03a",
".git/objects/9e/b3bc18ab0cff0c086d06066df85ab731839e05": "6b295034f2301190bbce11c8a1e2fd7b",
".git/objects/9f/57d5f4c290d89bb4aa0d72a80f810215654f62": "031fb7c318e4d0eb1739b24001d130e3",
".git/objects/a1/0e0f8d6b5f4e5ac6e022a4a60057005dbfa806": "4910b8208e65d4bb9d05794e045e69d6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/e8c22c3ef17219f5aa5be84954ab75ccc2e0bd": "ebea49dba7d32965357924ebec9b5b60",
".git/objects/a6/a470bb064a92a3c53d7255f46b06d4653b9615": "304493794fb2b686550fef59f7b19b52",
".git/objects/a7/0d404bb91322ecdf3d8f53cb2fc48c893a8de1": "2aa71ac209ef1e995d427bac9ee4d771",
".git/objects/a8/29539912a1ae8291ff51a1d8c6ab5c5b5bb10a": "ed1c4b63204a1adf3453b14c5ed8b06e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/b2/a1604c49929d442424055ccd5c75e507ca3780": "eacdcae8b442f4206bca5260e4aaef97",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/b3/ecc044502fccf5ed75b2ab8b3744df754a84f1": "1fa6f0709685f83ab6fab9e693ae88be",
".git/objects/b4/25151270b3757a2732b8c175e16905f5f62f7b": "f89b16070893246fb83efdc9b11a44d0",
".git/objects/b5/4970e24ce428c97575e1559616d2a06d773814": "a376391f1fb353edea9a056df7ef07ad",
".git/objects/b6/70865ee5e2deebfc0611c753c52bd76e0c6461": "ee502339b211c164712544dde248afc9",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/bc/b07f89ae21f544f56c441eb6162fb996ecb060": "a698b95fe4b84bd9c6d0f8b6869dcfa1",
".git/objects/be/93b4a7b3ccd4559c12fc553543ca55f7135986": "a6183bb82ac741129df09dda148dd979",
".git/objects/c0/b549f7e78fb71cda05dfa4e2984ae7e084d2f7": "89331cc5a80b9ae6110d1c2fb62e9aa4",
".git/objects/c2/090b49004f04580b8e5eacb0c76e039cc21cf5": "5d0a83eb11eef1bd40d0626f0414cc99",
".git/objects/c2/5adbb79388daa966ff2d194376858d27457c30": "2cdaa4b7a24130f74d064f308ef5df8b",
".git/objects/c4/fb109c80d0e9e608d3fda9a1dbb913dcd118d8": "a329d9b485b1bbc79d84b9b4086188d6",
".git/objects/c6/4a4d4c617a9134b73c3e2fd439281119c5a017": "609cd5ce88a541b1e8b95ec7330335c9",
".git/objects/c6/71396f513b59d436305dbb1e58715ecb70a58f": "d76c9e579e2bb59dbdc105f0c404b06c",
".git/objects/c6/f35e17e5f1296da17bc4bae93d81a2da63ceed": "3523264229804dc3c78bcf36e0b7bba4",
".git/objects/c8/c34e8466db2b6cc1363ca73612707ce284bce7": "aeaa30d6858ced0a6a2e44a0fb794ad6",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cb/e2ee35a2b49fc777e1d9c60057d15899dd57bc": "e7815089e128f01542779187cf96650c",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cd/0c3605f55465919721077d13d12126177bbcba": "7034ad78d17d383f73e492de093114eb",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/d1/b7102d9d81c7eebef724613a3f0f8063b4afe3": "96ddc5a647af265e3c4255580f13403b",
".git/objects/d5/872d21810434d2dfadfdafeb86203047b0fb0e": "04f36eb43d761e29171cb0d3072757e8",
".git/objects/d5/beef05defe287a0027548fbb38e44517fd86de": "3771ed2f33d2fc8f6b9ed638fcb1d81d",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/d7/8d6129789ecca450436f5d6ec25299b9bb5e7b": "9b2e5238ff43247d2f0844f2ddcaa517",
".git/objects/d9/358116aecd0bdb053326d73b7d6a496354d281": "b559e13011072fb95a20014bf886143f",
".git/objects/dc/0a89bc72404f7b60c8a6fda6d45da69274041a": "960c73dac1d2c7be08c38ceaf724f207",
".git/objects/de/620179f0830c05d80924b9629ac86fb7622598": "5173caa1528eb2ef3125658351642be9",
".git/objects/df/78df02021bb98e27e985dc13e387bcd59295ac": "2b5bdc9e9adec8937483c898e2c0ba18",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/3654a45a20c96c4f2b2e086656d973a92f7887": "2f71d483143634f31a87aca06d2f91c3",
".git/objects/e7/746e4b7eda5e72f4f9b654c3e37213b4da88e2": "3d80c363be00d96ff593a2c71ea784a5",
".git/objects/e8/ca24a641289684be3b7f1b15b9e4a0bc9c0b38": "d45c25dcc7fd65c153224a84bdc4a6c6",
".git/objects/ec/c299f2e309b55969e04e60e655ad26dc94a80f": "dd09381ffb9e7f6a5a2b88ceb4bf3fa3",
".git/objects/ef/ab2115625abafd4d58ac2ba84a1f6230e748da": "ad3234e94a5d627b97e7d8c09aa2e0fb",
".git/objects/f7/00fc456a4943345d0dbacbdca78bca0f5a6b09": "7095cbdda6814051e46af03beabd959d",
".git/objects/f7/276d6266008c4fa2761e035a7d827fdc24335c": "0a119b844c91777ab15113d169c1e2f5",
".git/objects/f8/88837824f50d03a55fd6947242cd0d562ef1e5": "fa4aa795fd15e6121e7939fbbce2fb7e",
".git/objects/f9/473d417668df2003b81ebfe924173047ac51dc": "cc4203239c876988396271bb66f7e1f1",
".git/objects/fa/7e9b3f4ad70c967b13ff239df52574d81a69df": "fd5d6a65746c550c0f94b9d6157ca992",
".git/objects/fa/84cb53e2eba86b467c599e89d697c1487dc930": "8155906b26b2e03142d3172b299b1023",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/fe/07c4c65697cc7548b649fe518035b63a827994": "dc4bf74d31a8b90019b35e135ce8f799",
".git/objects/fe/acd3c7c2b84a84e44ea739e8101d514fe27922": "e9f1193725df419d24d7d9528af24493",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/refs/heads/main": "624b3df6979bbbb525b444445bce36ae",
".git/refs/heads/master": "3f014181c40802007cf032ea80f200a4",
".git/refs/remotes/origin/main": "624b3df6979bbbb525b444445bce36ae",
"assets/AssetManifest.json": "2084965cf9352da18c5b0deab8ad6eb0",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/images/about_portrait.png": "9091aa9c48c591ed4872c788cc954551",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/appbrewery_flutter_certificate.PNG": "31dd27a9825acf35d1cab766645f4e6f",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/dart_flutter_certificate.png": "10946af72e67f3685f509b628da2d0c1",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/david_legend.png": "53ea1f34c8af26fb2b0050bee9c1dd1c",
"assets/assets/images/dev-about.jpg": "6f6bad0b76d6997ee4fdb103f215c8f3",
"assets/assets/images/dev_meditate-modified.png": "c4d46c446e080758a070491f88cdfed0",
"assets/assets/images/dev_meditate.png": "0d38f148b24a0a8cdf9f3a0525c26005",
"assets/assets/images/dev_meditate1.png": "742e79b9b388e0a9304a12eb0f8f6291",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/flutter_firebase_certificate.jpg": "94e60921ef71a9d94acec69aec27fa69",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/HASSAN_OSAMA_CV.pdf": "4f541b72760664a7fd191e21efc98d9f",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/projects/aerium-v1/portfolio_cover.PNG": "7fcbbf32fa737c51d624eecfe70820a6",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/aerium-v2/last.jpg": "95839ffee39d35bb6dffc20267b75b04",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/drop/drop_cover.png": "cf0e3d421dbc8bd5db9c103937b55ea7",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/flutter_catalog/activities.png": "56b8a82f91b3bb17fc2da735be8309e2",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png": "ca9498b8cfb258eb5e42905908722a32",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png.png": "fb5f2b5ebc3111b9c6962aafd64697cf",
"assets/assets/images/projects/flutter_catalog/onboarding.png": "78cd62661bd65bca48016781ec5af76d",
"assets/assets/images/projects/flutter_catalog/screens.png": "f384d904e19edcdf3b83ac9fab4a2514",
"assets/assets/images/projects/flutter_catalog/stats.png": "c6c5da388e4771644e3a0057737cc018",
"assets/assets/images/projects/flutter_catalog/thanks.png": "f23385476a0df7db049d7b8f94714706",
"assets/assets/images/projects/flutter_catalog/typography.png": "b12b17f85e8e12bd2ccab08e987c640c",
"assets/assets/images/projects/foodybite/foodybite_cover.PNG": "cacfac98a9ca8b3e6a9d48d969852e42",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "6798425643b22d82283c0e314f49539e",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.JPG": "f1a02b07c0e600ab2d544839185a516b",
"assets/assets/images/projects/otp_package/otp_cover.PNG": "9865ed43f582999bea1ebf35b650d46d",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "e998b81838574b8012925353511a8e72",
"assets/assets/images/projects/roam/roam_cover.jpeg": "cef57380b0253374959e4cab1eaf4d32",
"assets/assets/images/projects/roam/roam_cover.jpg": "a010d586cacb50590fbc12c7e86061ec",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cae18abff5440dce8e02bf5b1d1973e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"index.html": "75a9f4fe62eee2a839147783ab9f39cb",
"/": "75a9f4fe62eee2a839147783ab9f39cb",
"main.dart.js": "880f987e35a2c86b39a5e7a3ff9fedfb",
"manifest.json": "6c7145e72f18c4fae4acf4fbe47f0b54",
"version.json": "e4516f16fbf3ecc92092f0f1d3c53171"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
