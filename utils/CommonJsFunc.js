const ParseTime = (time,sign) => {
    time = parseInt(time)
    if(time>0){
      if(time[0]=='0'){
        return `${time[1]}${sign} `
    }
    else{
      return `${time}${sign} `
    }
  }};

export { ParseTime };