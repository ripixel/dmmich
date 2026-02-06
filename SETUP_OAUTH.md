# Decap CMS OAuth Setup

Once your Firebase billing is active, follow these steps.

## 1. Create a GitHub OAuth App

1. Go to **GitHub → Settings → Developer settings → [OAuth Apps](https://github.com/settings/developers)**
2. Click **New OAuth App**
3. Fill in:
   - **Application name**: `dmmich CMS`
   - **Homepage URL**: `https://dmmich-6824e.web.app`
   - **Authorization callback URL**: `https://placeholder` (update after step 2)
4. Note the **Client ID** and generate a **Client Secret**

## 2. Deploy the OAuth Function

```bash
cd /home/ripixel/dev/decap-cms-oauth-firebase

# Point to the dmmich project
firebase use dmmich-6824e

# Set the client secret
firebase functions:secrets:set OAUTH_CLIENT_SECRET
# (paste GitHub Client Secret when prompted)

# Deploy
cd functions && npm run deploy
```

When prompted during deploy:
- **OAUTH_PROVIDER**: `github`
- **OAUTH_CLIENT_ID**: your GitHub OAuth Client ID
- **OAUTH_REDIRECT_URI**: the function URL from the deploy output (e.g. `https://oauth-xxxx-xx.x.run.app`)

## 3. Update the GitHub Callback URL

Go back to your GitHub OAuth app settings. Set **Authorization callback URL** to:

```
https://oauth-XXXXXXXXXX-XX.X.run.app/callback
```

(use the actual function URL from the deploy output)

## 4. Add Rewrites to firebase.json

Add the following to `firebase.json` inside the `"hosting"` object, before `"cleanUrls"`:

```json
"rewrites": [
    {
        "source": "/api/auth",
        "function": "oauth"
    },
    {
        "source": "/api/callback",
        "function": "oauth"
    }
],
```

## 5. Deploy the Site

```bash
cd /home/ripixel/dev/dmmich
npm run build
npm run deploy
```

## 5. Test

Visit `https://dmmich-6824e.web.app/admin` — authenticate via GitHub.
