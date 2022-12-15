const Discord = require("discord.js")

const client = new  Discord.Client({intents:[
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    
  ]});
  //console.log(Discord)
  const token ='MTA0OTc5ODI4ODUzMjA1NDA0Ng.GHlcTM.F-CGBvCWq4VWLNEPGXMKu-kAoYG4Mxqy7WPhpw'
  
  client.on('ready', () => {
      console.log(`ta indo ${client.user.tag}` )
      
  })
  
    let pessoas =[]
    const PersonName= (pessoa)=>{
      let verificandoArray = false; 
      pessoas.filter(people => {
        if(people === pessoa){
          verificandoArray  = true
           
        }else{
          verificandoArray  = false
         
        }
      });
      
      if(!verificandoArray){
      pessoas.push(pessoa)
      }else{
        
        return;
      }
      
    }
    const VerifyPerson = (msg)=>{
      let verificandoArray = false; 
      pessoas.filter(people => {
        if(people === msg){
         verificandoArray  = true;
           
        }else{
         verificandoArray  = false;
         
        }
      
      });
      return verificandoArray;
    }
   
    client.on("message", (msg) => {
     
    
      let Mensagens = {
        'oi': 'salve felas',
        'bot de corno': 'tua mae vagabunda',
        'quem fez': `O Rei né @valdim`
    
      }
        if(Mensagens[msg.content]){
          msg.reply(Mensagens[msg.content]);
        }
  
       
  
        if(!VerifyPerson(msg.author.username)){
        
        if (msg.author.username === "Nicole Laysa") {
          PersonName(msg.author.username)
          msg.reply(`ola Nicole amor da vida do Rei Osvaldo`);
         
        }else if(msg.author.username === 'Valdim'){
          PersonName(msg.author.username)
          msg.reply(`ola meu Rei`);
          
        }else if(msg.author.bot){
    
          return;
        }else{
          PersonName(msg.author.username)
          msg.reply(`ola random`);
          
        }
      }else{
        return;
      }
      
       console.log(pessoas)
      
      })
      
  
  client.login(token)