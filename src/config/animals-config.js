const animalsConfig = {
    apiUrl: "https://68d7d3292144ea3f6da6876d.mockapi.io/",
    firstNames: [
        "Грозо", "Лаво", "Кристало", "Тіньо", "Полум'яно", "Блискаво",
        "Мороко", "Штормо", "Крижанок", "Вогнекрил", "Глибодуш",
        "Пустельнорог", "Туманокут", "Залізогрив", "Сріблокіг",
        "Темнолап", "Луноклик", "Буресерд", "Камінегруд", "Сонцекор",
        "Вітрокут", "Громоброд", "Іскролап", "Пісчанокрай",
        "Хмароступ", "Гривоспалах", "Кроволют", "Чорнопер",
        "Світломор", "Буревіт"
    ],

    lastNames: [
        "Ведень", "Змир", "Гриф", "Воріг", "Скарб", "Дракон",
        "Пард", "Рух", "Кінь", "Мара", "Тигрел", "Саламандр",
        "Крил", "Хохіт", "Зорень", "Шептун", "Титан", "Спалах",
        "Душеріз", "Холодень", "Примар", "Берсерк", "Розрив",
        "Охоронець", "Мандрівник", "Стихієць", "Пожирач",
        "Страж", "Крадущий", "Провидець"
    ],

    descTemplates: [
        "{{name}} — древня істота, чия сила прокидається лише під час буревіїв.",
        "{{name}} володіє здатністю бачити крізь стіни та рухатися безшумно.",
        "Легенди кажуть, що {{name}} може керувати енергією зірок.",
        "{{name}} народжується лише раз на тисячу років і приносить удачу власнику.",
        "{{name}} розсікає повітря крилами зі швидкістю звука.",
        "У гніві {{name}} може спопелити цілий ліс за кілька секунд.",
        "{{name}} охороняє древні глибинні таємниці океану.",
        "Під час бою {{name}} входить у транс і стає у десятки разів сильнішим.",
        "{{name}} рухається так швидко, що розчиняється у тінях.",
        "{{name}} проливає сльози, здатні лікувати найтяжчі рани.",
        "{{name}} вміє створювати кристалічні бар'єри непереборної міцності.",
        "Коли {{name}} реве, земля під ногами ворогів здригається.",
        "{{name}} володіє телепатією та читає думки суперника.",
        "{{name}} залишає позаду слід із іскор та світла під час польоту.",
        "{{name}} може заморозити воду одним дотиком за мить.",
        "Вночі {{name}} світиться м'яким містичним сяйвом.",
        "{{name}} здатен контролювати вогонь та створювати полум'яні вихори.",
        "{{name}} гіпнотизує своїм голосом та вводить ворогів у сон.",
        "{{name}} розкриває тріщини землі під своїми лапами.",
        "{{name}} вміє перетворюватися у туман і зникати.",
        "{{name}} править підводними мешканцями як їхній повелитель.",
        "{{name}} має кігті, гостріші за алмази.",
        "{{name}} створює ілюзії, здатні обманути навіть наймудріших істот.",
        "Під час повного місяця {{name}} стає у кілька разів сильнішим.",
        "{{name}} має очі, в яких палає давня магія.",
        "{{name}} може піднімати величезні хвилі одним рухом лапи.",
        "{{name}} здатен проламати навіть сталеві стіни одним стрибком.",
        "{{name}} не боїться ні холоду, ні спеки — його тіло адаптується миттєво.",
        "{{name}} має настільки гострі чуття, що відчуває ворога за кілометр.",
        "{{name}} контролює вітер та може створювати смерчі з повітря."
    ],


    prompts: [
        "A cute cartoon ancient creature with glowing storm patterns on its fur, crackling with lightning energy, friendly expression, standing in rain with thunder clouds above, cartoonish style, vibrant electric blue colors",
        "A cute cartoon stealthy animal with big translucent glowing eyes, fluffy shadowy body, moving quietly like a ninja, mystical aura around it, cartoonish style, soft purple and gray colors",
        "A cute cartoon celestial animal with sparkling star patterns on its fur, surrounded by tiny floating stars and cosmic dust, magical glow, cartoonish style, vibrant cosmic purple and gold colors",
        "A cute cartoon rare lucky animal with golden shimmering fur, four-leaf clovers and horseshoes floating around it, radiant happy aura, cartoonish style, bright gold and green colors",
        "A cute cartoon swift flying creature with large feathered wings, zooming through the air with speed lines, friendly determined face, cartoonish style, vibrant sky blue and white colors",
        "A cute cartoon fierce fire creature with flame patterns on its body, small flames dancing around it, powerful but adorable expression, cartoonish style, bright orange and red colors",
        "A cute cartoon ocean guardian creature with scales and fins, surrounded by bubbles and small fish, wise gentle eyes, underwater setting, cartoonish style, vibrant blue and teal colors",
        "A cute cartoon warrior animal with determined glowing eyes, muscles slightly flexed, battle-ready pose but still adorable, energy sparks around it, cartoonish style, vibrant red and orange colors",
        "A cute cartoon shadow creature dissolving into playful dark mist, barely visible with glowing friendly eyes, wispy body, cartoonish style, dark purple and black with highlights",
        "A cute cartoon healing creature with big compassionate eyes, crystal tears sparkling as they fall, soft magical glow, flowers blooming nearby, cartoonish style, pastel pink and gold colors",
        "A cute cartoon crystal creature creating geometric shield barriers, crystalline body parts, protective stance, sparkles everywhere, cartoonish style, vibrant cyan and white colors",
        "A cute cartoon powerful roaring creature with mouth open in a mighty but cute roar, small earthquake cracks beneath it, cartoonish style, vibrant brown and orange earth tones",
        "A cute cartoon psychic animal with a glowing third eye mark on forehead, telepathic waves drawn as sparkles, wise friendly expression, cartoonish style, vibrant purple and pink colors",
        "A cute cartoon flying creature leaving a sparkly glittering trail of light behind it, joyful expression, wings spread wide, cartoonish style, vibrant rainbow and gold colors",
        "A cute cartoon ice creature with frost patterns on its fluffy fur, touching water with one paw creating ice crystals, friendly smile, cartoonish style, vibrant icy blue and white colors",
        "A cute cartoon glowing nocturnal creature with bioluminescent patterns, soft magical light emanating from its body, peaceful sleepy expression, cartoonish style, soft blue and green glow",
        "A cute cartoon fire-wielding creature with small flame vortexes swirling around it, confident pose, friendly fiery eyes, cartoonish style, vibrant red orange and yellow colors",
        "A cute cartoon hypnotic creature with big swirling spiral eyes, musical notes floating around it, soothing gentle expression, cartoonish style, soft purple and pastel colors",
        "A cute cartoon earth creature with strong paws, small cracks forming beneath it, determined but friendly face, rocks and pebbles around, cartoonish style, vibrant brown and green colors",
        "A cute cartoon misty creature turning into soft fog clouds, partially transparent body, playful mysterious expression, cartoonish style, soft gray and white with magical sparkles",
        "A cute cartoon underwater ruler creature with a tiny coral crown, surrounded by happy sea creatures, regal but adorable pose, cartoonish style, vibrant ocean blue and coral colors",
        "A cute cartoon creature with diamond-sparkle claws that glitter, proud confident stance, friendly face, gems floating around, cartoonish style, vibrant crystal and rainbow colors",
        "A cute cartoon trickster creature creating playful illusion copies of itself, winking mischievously, surrounded by phantom bubbles, cartoonish style, vibrant purple and pink magical colors",
        "A cute cartoon lunar creature glowing under a full moon, body shimmering with moonlight, peaceful powerful expression, night sky behind, cartoonish style, soft silver and blue colors",
        "A cute cartoon magical creature with ancient glowing runes in its big eyes, mystical symbols gently floating around, wise but cute expression, cartoonish style, vibrant purple and gold colors",
        "A cute cartoon wave-summoning creature raising its paw with big ocean waves behind it, determined heroic face, water splashes around, cartoonish style, vibrant blue and white foam colors",
        "A cute cartoon strong jumping creature mid-leap breaking through a cartoon wall, determined expression, action lines showing power, cartoonish style, vibrant gray steel and orange impact colors",
        "A cute cartoon adaptive creature with half its body showing fire colors and half showing ice crystals, unique dual design, friendly expression, cartoonish style, vibrant red-orange and icy-blue split",
        "A cute cartoon alert creature with big perked-up ears, enhanced senses shown with radar-like waves, focused attentive expression, cartoonish style, vibrant green and yellow colors",
        "A cute cartoon wind-controlling creature surrounded by swirling air currents and small tornado spirals, confident commanding pose, cartoonish style, vibrant white and light blue with wind effects"
    ],

    rangePower: [50, 100],
    rangeStamina: [50, 100],
    rangeHitpoints: [50, 100]
}

export default animalsConfig