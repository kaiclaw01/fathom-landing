# ✅ Spaceship DNS Setup Checklist

## 🎯 Quick Setup (5 minutes)

### 1️⃣ Go to Spaceship DNS Settings
**URL:** https://www.spaceship.com/domain/dns/thefathom.agency

---

### 2️⃣ Add These 4 Records:

#### Record 1: Root Domain
```
Type:  A
Host:  @ (or blank)
Value: 76.76.21.21
TTL:   Auto or 3600
```
☐ Added

#### Record 2: WWW Subdomain
```
Type:  CNAME
Host:  www
Value: cname.vercel-dns.com
TTL:   Auto or 3600
```
☐ Added

#### Record 3: Wildcard (Optional)
```
Type:  CNAME
Host:  *
Value: cname.vercel-dns.com
TTL:   Auto or 3600
```
☐ Added

#### Record 4: SSL Certificate
```
Type:  CAA
Host:  @ (or blank)
Value: 0 issue "letsencrypt.org"
TTL:   Auto or 3600
```
☐ Added

---

### 3️⃣ Save Changes
☐ Click "Save" or "Update" in Spaceship dashboard

---

### 4️⃣ Wait for Propagation
☐ Wait 15-30 minutes for DNS to propagate globally

---

### 5️⃣ Test Your Domain

**In browser:**
- https://thefathom.agency ☐ Working
- https://www.thefathom.agency ☐ Working

**Check DNS propagation:**
- https://dnschecker.org/#A/thefathom.agency ☐ Shows `76.76.21.21`
- https://dnschecker.org/#CNAME/www.thefathom.agency ☐ Shows `cname.vercel-dns.com`

---

### 6️⃣ Update Code (After DNS Works)
☐ Update canonical URLs in `index.html` from `fathom-landing.vercel.app` to `thefathom.agency`
☐ Commit and deploy changes

---

## 🚨 Common Issues

**"CNAME not allowed for root"**
→ Use A record with value `76.76.21.21`

**"Domain shows 404"**
→ Wait 30 more minutes, DNS still propagating

**"Not secure / SSL error"**
→ SSL cert takes 5-10 min after DNS works, be patient

**"Still shows .vercel.app"**
→ Clear browser cache or try incognito mode

---

## 📞 Need Help?

- **Spaceship Support:** https://www.spaceship.com/support
- **Vercel Support:** https://vercel.com/help
- **DNS Checker:** https://dnschecker.org

---

**Estimated Time:** 20-45 minutes total (5 min setup + 15-40 min propagation)
