const longestPalindrome = function (s) {
  if (s.length === 1) return s
  let leader = s[0]

  for (let i = 0; i < s.length; i++) {
    let tempStr = s[i]

    for (let j = i + 1; j < s.length; j++) {
      tempStr += s[j]
      if (isPalindrome(tempStr) && tempStr.length > leader.length) {
        leader = tempStr
      }
    }
  }
  return leader
}

const isPalindrome = (str) => {
  str = str.toLowerCase()
  for (
    let start = 0, end = str.length - 1;
    start < Math.floor(str.length / 2);
    start++, end--
  ) {
    if (str[start] !== str[end]) return false
  }
  return true
}

// const isPalindrome = (str) =>
//   str.toLowerCase() === str.toLowerCase().split("").reverse("").join("")

// console.log(longestPalindrome("ac"))
console.log(
  longestPalindrome(
    "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
  )
)
