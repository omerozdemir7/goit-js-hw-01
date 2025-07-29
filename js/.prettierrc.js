// .prettierrc.js

module.exports = {
  // Satır sonunda noktalı virgül (;) olsun mu?
  // true: olsun (varsayılan)
  // false: olmasın
  semi: true,

  // Metinler için tek tırnak mı ('') çift tırnak mı ("") kullanılsın?
  // true: tek tırnak kullan ('')
  // false: çift tırnak kullan ("") (varsayılan)
  singleQuote: true,

  // Bir satırın maksimum uzunluğu ne kadar olsun?
  // Bu uzunluğu geçen kodları Prettier uygun bir şekilde alt satıra indirir.
  printWidth: 80,

  // Tab tuşuna basıldığında kaç boşluk bırakılsın?
  tabWidth: 2,

  // Objelerin ve array'lerin son elemanından sonra virgül (trailing comma) olsun mu?
  // "es5": Sadece ES5'te geçerli olan yerlerde (fonksiyon parametreleri hariç) olsun. (varsayılan)
  // "all": Mümkün olan her yerde olsun.
  // "none": Hiç olmasın.
  trailingComma: 'es5',

  // Obje literal'lerinde parantezler ile içerik arasında boşluk bırakılsın mı?
  // true: { foo: bar }
  // false: {foo: bar} (varsayılan)
  bracketSpacing: true,

  // Ok fonksiyonlarında (arrow function) tek parametre olduğunda parantez kullanılsın mı?
  // "always": Her zaman parantez kullan (x) => {} (varsayılan)
  // "avoid": Gereksizse kullanma x => {}
  arrowParens: 'always',
};