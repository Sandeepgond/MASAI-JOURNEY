const express = require('express')

const app = express();

const CLIENT_ID = "2fcc4154d01bf685add5";
const CLIENT_SECRET = "eff89b69fb7795f03e900a47924f68b389b0dde5";

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get('/github/callback', async (req, res) => {
    const { code } = res.query;
    console.log("Github code ", code)

    // const userdata = fetch("whatver.github.com/api?code=2fcc4154d01bf685add5")
    // const user = await UserModel.create({...userdata})
    //

    const { access_token } = await fetch(
        "https://github.com/login/oauth/access_token",
        {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code,
        })

    })
    .then((e)=> e.json())
    .catch(console.error)


    console.log("Access", access_token)

    const userDetails = await fetch("https://api.github.com/user",{
        headers: {
            "Authorization": `Bearer ${access_token}`,
        },
    })
    .then((x)=> x.json())
    .catch(console.error)
    
    console.log(userDetails)
    
    return res.send("Sign in with github success")
});

app.listen(8080, () => {
    console.log('server started on port 8080')
});

//951d4c535d63285a944bebcd0baf19312feb2e55