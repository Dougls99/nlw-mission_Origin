const LinksSocialMedia = {
  github: 'dougls99',
  youtube: 'dougls99',
  facebook: 'douglspereira',
  instagram: 'dougls99',
  twitter: 'Dougls99'
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()