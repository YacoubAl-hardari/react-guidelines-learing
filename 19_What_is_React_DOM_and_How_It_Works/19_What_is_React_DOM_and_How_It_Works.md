
**الدرس 23: فهم React DOM وحل مشكلة تغيير القيم في واجهة المستخدم**

في الدرس السابق، حاولنا تغيير قيمة متغير بطريقة ديناميكية عند الضغط على زر، وكان من المتوقع أن يتغير هذا المتغير مباشرة في واجهة المستخدم (UI)، لكن هذا لم يحدث. في هذا الدرس، سنتعرف على السبب وراء هذه المشكلة من خلال فهم كيفية عمل React DOM.

### ما هو React DOM؟

عندما تبدأ في استخدام React، سترى في البداية واجهة مستخدم تحتوي على شعار React وبعض النصوص التي تكتب تحتها. هذه الواجهة، رغم أنها تظهر بشكل محدد، يتم تحويلها خلف الكواليس إلى أكواد مكتوبة بصيغة معينة، وهي JSX. يتم تحويل JSX إلى ما يفهمه المتصفح (HTML) بشكل مباشر.

### الشجرة العائلية في HTML

الواجهة التي تراها أمامك على المتصفح ليست سوى تمثيل للـ DOM (Document Object Model)، وهو ترتيب شجري للعناصر التي تظهر في الصفحة. على سبيل المثال، إذا كان لدينا عنصر `<body>` يحتوي على عنصر `<div>`, وعليه عناصر أخرى مثل `<header>`, فهذا يشكل ترتيبًا هرميًا.

يمكنك تخيل الـ DOM على أنه شجرة عائلية: كل عنصر في الصفحة هو "ابن" لعنصر آخر، ويعكس هذا الترتيب الهيكلي العائلي، حيث يبدأ من `<body>` كالعائلة الأم وصولًا إلى العناصر الداخلية كالأبناء والأحفاد.

### كيف يعمل React DOM؟

React لا يعمل مباشرة على الـ DOM الأساسي في المتصفح. بدلاً من ذلك، يقوم بإنشاء نسخة مستقلة من الـ DOM تُسمى "Virtual DOM". الهدف من هذه النسخة المستقلة هو تحسين الأداء، حيث أن التعديل المباشر على الـ DOM الأساسي قد يكون مكلفًا من حيث الموارد.

React يقارن بين النسخة الحالية والنسخة الجديدة من Virtual DOM، ثم يحدد التغييرات المطلوبة فقط، ويطبق هذه التغييرات على الـ DOM الفعلي بشكل جزئي بدلاً من استبداله بالكامل. هذا يساعد في تحسين الأداء ويجعل التغييرات تظهر بسرعة للمستخدم.

### كيف يتعامل React مع التغييرات؟

عندما تقوم بتغيير قيمة نصية في عنصر على واجهتك باستخدام React (مثل تغيير نص من "React" إلى "Real Course"), React يقوم بعمل مقارنة بين النسخة القديمة والجديدة للـ Virtual DOM، ثم يكتشف التغيير ويطبقه على الـ DOM الفعلي ليظهر للمستخدم.

### المشكلة التي واجهتنا

في الدرس السابق، عندما ضغطنا على الزر لتغيير قيمة المتغير `name` من "Ahmed" إلى "Yarob"، كان من المفترض أن يظهر التغيير مباشرة في الواجهة. لكن هذا لم يحدث.

المشكلة كانت بسبب عاملين رئيسيين:

1. **التغيير في المتغيرات المحلية (local variables)**: إذا قمت بتغيير متغير داخل مكون React، فإن هذا التغيير لا يقوم بتفعيل عملية إعادة التقديم (rerender) بشكل تلقائي. بمعنى آخر، لا يتم التفاعل مع الـ Virtual DOM إلا إذا كان التغيير في حالة (state) مكون React.
   
2. **المتغيرات المحلية لا تحتفظ بالقيمة بين عمليات الـ render**: في React، المتغيرات المحلية التي تعرفها داخل المكون تتغير وتعود إلى قيمتها الأولية بعد كل عملية `render`. هذا يعني أن التغييرات التي حدثت على المتغير `name` لن تُحفظ إذا كانت داخل المتغيرات المحلية للمكون.

### الحل المقترح

لحل هذه المشكلة، نحتاج إلى استخدام "State" بدلاً من المتغيرات المحلية العادية. في React، عند تغيير حالة (state)، سيقوم React بتفعيل عملية إعادة التقديم تلقائيًا، مما يضمن أن التغييرات ستظهر في واجهة المستخدم.

في الدرس القادم، سنتعلم كيفية استخدام `useState` أو الطرق المناسبة لإدارة الحالة في React، مما سيحل هذه المشكلة تمامًا.

