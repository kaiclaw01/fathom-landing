# 🌐 Domain Setup Guide: thefathom.agency → Vercel

## Current Status
- **Domain:** thefathom.agency (purchased from Spaceship)
- **Vercel Project:** fathom-landing
- **Status:** Domain added to Vercel ✅, DNS configuration needed ⏳

---

## 📋 Step-by-Step Spaceship DNS Setup

### 1. Login to Spaceship
Go to: https://www.spaceship.com/domain/dns/thefathom.agency

### 2. Add DNS Records

You need to add **4 DNS records**:

#### Option A: Using A Records (Recommended for Spaceship)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | @ | `76.76.21.21` | 3600 |
| **CNAME** | www | `cname.vercel-dns.com` | 3600 |
| **CNAME** | * | `cname.vercel-dns.com` | 3600 |
| **CAA** | @ | `0 issue "letsencrypt.org"` | 3600 |

#### Option B: Using CNAME for Root (if supported)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | @ | `6abf5473b6603ba8.vercel-dns-017.com` | 3600 |
| **CNAME** | www | `cname.vercel-dns.com` | 3600 |
| **CNAME** | * | `cname.vercel-dns.com` | 3600 |
| **CAA** | @ | `0 issue "letsencrypt.org"` | 3600 |

**Note:** Most registrars (including Spaceship) don't support CNAME for root domain. Use **Option A** with A record.

---

## 🔧 Detailed Instructions

### Step 1: Remove Old Records (if any)
- Delete any existing A, CNAME, or ALIAS records for `@` and `www`
- Keep NS (nameserver) records as-is

### Step 2: Add Root Domain (thefathom.agency)
```
Type: A
Name: @ (or leave blank - means root domain)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

### Step 3: Add WWW Subdomain (www.thefathom.agency)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 4: Add Wildcard (*.thefathom.agency) - Optional
```
Type: CNAME
Name: *
Value: cname.vercel-dns.com
TTL: 3600
```

### Step 5: Add SSL Certificate Authority (for HTTPS)
```
Type: CAA
Name: @ (or leave blank)
Value: 0 issue "letsencrypt.org"
TTL: 3600
```

---

## ⏱️ Propagation Time

- **DNS propagation:** 5 minutes - 48 hours (usually 15-30 minutes)
- **SSL certificate:** Automatic after DNS propagates (5-10 minutes)

---

## ✅ Verification

### Check DNS Propagation:
```bash
# Windows PowerShell
nslookup thefathom.agency
nslookup www.thefathom.agency

# Or use online tool:
# https://dnschecker.org/#A/thefathom.agency
```

### Expected Results:
- `thefathom.agency` → `76.76.21.21`
- `www.thefathom.agency` → CNAME to `cname.vercel-dns.com`

### Check in Browser:
1. Wait 15-30 minutes after DNS changes
2. Visit: https://thefathom.agency (should show your site)
3. Visit: https://www.thefathom.agency (should redirect to main domain)

---

## 🚨 Troubleshooting

### Issue: "Invalid Configuration" in Vercel
**Solution:** DNS not propagated yet. Wait 30 minutes and check.

### Issue: "SSL Certificate Error"
**Solution:** SSL takes 5-10 min after DNS propagates. Wait and try again.

### Issue: "CNAME not allowed for root domain"
**Solution:** Use A record (76.76.21.21) for @ instead.

### Issue: "Domain already assigned to another project"
**Solution:** Already fixed - domain is assigned to fathom-landing project ✅

---

## 📝 Quick Reference

**Your Domain:** thefathom.agency  
**Vercel A Record:** 76.76.21.21  
**Vercel CNAME:** cname.vercel-dns.com  
**Vercel-specific CNAME:** 6abf5473b6603ba8.vercel-dns-017.com  

**Spaceship DNS Management:**  
https://www.spaceship.com/domain/dns/thefathom.agency

**Vercel Project Dashboard:**  
https://vercel.com/kaiclaw01s-projects/fathom-landing

---

## 🎯 After DNS Setup

Once DNS propagates, update the canonical URLs in the code:

1. Change canonical URL in `index.html`:
   ```html
   <link rel="canonical" href="https://thefathom.agency/">
   ```

2. Change og:url:
   ```html
   <meta property="og:url" content="https://thefathom.agency/">
   ```

3. Change og:image URL:
   ```html
   <meta property="og:image" content="https://thefathom.agency/og-image.jpg">
   ```

4. Change Twitter image URL:
   ```html
   <meta name="twitter:image" content="https://thefathom.agency/og-image.jpg">
   ```

---

**Created:** 2026-02-04  
**Status:** Awaiting DNS configuration at Spaceship
