---
description: Create a new blog post for the APAC Worldwide website and generate social media content for LinkedIn and Twitter
---

# Create Blog Post & Social Media Content

This workflow creates a new blog post on the APAC Worldwide website and generates ready-to-post social media content for it.

## Project Location
The website source code is at: `/Users/vasugupta/Documents/apac-worldwide-v1 copy/`

## Step 1: Understand the Topic

Ask the user for:
- **Topic** — What the blog post should be about
- **Target audience** — Who this is for (e.g., founders, investors, Indian businesses)
- **Key points** — Any specific points to cover (optional, you can research)

## Step 2: Create the Blog Post Data

Open `/Users/vasugupta/Documents/apac-worldwide-v1 copy/lib/blog.ts` and add a new entry to the `blogPosts` array.

### Blog Post Schema

Every blog post must follow this exact TypeScript structure:

```typescript
{
  slug: "kebab-case-url-slug",                    // URL-friendly, unique
  title: "Full Blog Post Title",                   // 60-80 chars ideal for SEO
  description: "Meta description for SEO",         // 150-160 chars
  category: "Category Name",                       // e.g. "Incorporation", "Compliance", "Strategy", "Banking", "Immigration", "Real estate", "Cross border", "Tax"
  readTime: "X min read",                          // Estimate based on content length
  image: "https://images.unsplash.com/photo-...",  // Use Unsplash for images, 1400px wide
  imageAlt: "Descriptive alt text for the image",
  publishedAt: "YYYY-MM-DD",                       // Today's date
  updatedAt: "YYYY-MM-DD",                         // Same as publishedAt initially
  excerpt: "A compelling 1-2 sentence hook",        // Shows on blog listing cards
  intro: [                                          // 2 paragraphs of introduction
    "First intro paragraph...",
    "Second intro paragraph..."
  ],
  keyTakeaways: [                                   // 3 bullet points, must be actionable
    "Takeaway 1",
    "Takeaway 2",
    "Takeaway 3"
  ],
  sections: [                                       // 3-5 content sections
    {
      title: "Section heading",
      paragraphs: [
        "Paragraph 1...",
        "Paragraph 2..."
      ],
      bullets: [                                    // Optional bullet list
        "Bullet 1",
        "Bullet 2"
      ]
    }
  ],
  faq: [                                            // 2 FAQs with question/answer
    {
      question: "Question text?",
      answer: "Answer text"
    }
  ],
  officialLinks: [                                  // 1-2 external reference links
    {
      label: "Link description",
      href: "https://..."
    }
  ],
  relatedSlugs: [                                   // 2 slugs of related existing posts
    "existing-post-slug-1",
    "existing-post-slug-2"
  ]
}
```

### Writing Style Guidelines
- **Tone**: Professional, authoritative, founder-to-founder. Not salesy.
- **Voice**: Third person with occasional "we" for APAC Worldwide mentions
- **Length**: 800-1200 words total across all sections
- **SEO**: Use the primary keyword naturally in the title, description, excerpt, and first intro paragraph
- **No fluff**: Every sentence should add value. Cut filler words.
- **APAC mention**: Include one natural mention of APAC Worldwide in the final section showing how they help with this topic

### Finding Images
Use Unsplash URLs in this format:
```
https://images.unsplash.com/photo-PHOTO_ID?auto=format&fit=crop&w=1400&q=80
```
Choose images related to business, Dubai, UAE skyline, professional settings, or the specific topic. **Never use the Taj Mahal for India-related content.**

## Step 3: Verify the Build

// turbo
Run the dev server check to make sure the new blog post renders properly:

```bash
cd "/Users/vasugupta/Documents/apac-worldwide-v1 copy" && npm run build
```

If there are TypeScript or build errors, fix them before proceeding.

## Step 4: Generate Social Media Content

Create social media posts for the new blog post.

### LinkedIn Post Template (150-200 words)
```
[Hook — 1 compelling line that stops scrolling]

[Problem/Context — 2-3 lines establishing why this matters]

[Key points — 3-5 bullet points using → or emoji prefixes]

[CTA — Link to blog post]

[Hashtags — 4-6 relevant hashtags]
```

### Twitter/X Post Template (under 280 chars)
```
[One-line hook with a strong claim or question]

[1-2 supporting facts]

[Link to blog post]
```

### Guidelines
- **LinkedIn**: Professional tone, use line breaks for readability, include 4-6 hashtags
- **Twitter**: Punchy, direct, no hashtags (they reduce reach on X)
- **Both**: Include the full blog URL from apacworldwide.com
- **Hashtags to use**: #UAE #Dubai #BusinessSetup #CompanyFormation #Entrepreneurship + topic-specific ones

## Step 5: Present to User

Show the user:
1. The blog post title and slug
2. The LinkedIn post (ready to copy-paste)
3. The Twitter post (ready to copy-paste)
4. Ask if they want to deploy the changes to production

## Step 6: Deploy (if approved)

// turbo
```bash
cd "/Users/vasugupta/Documents/apac-worldwide-v1 copy" && git add -A && git commit -m "feat: add blog post - [TITLE]"
```

// turbo
```bash
cd "/Users/vasugupta/Documents/apac-worldwide-v1 copy" && git push origin main
```

// turbo
```bash
cd "/Users/vasugupta/Documents/apac-worldwide-v1 copy" && npx -y vercel --prod --yes
```

## Existing Blog Post Slugs (for relatedSlugs reference)

- `cost-to-start-a-business-in-dubai-2026`
- `free-zone-or-mainland-for-a-new-uae-company`
- `how-foreign-founders-can-open-a-company-in-dubai`
- `uae-corporate-tax-guide-for-new-companies`
- `uae-investor-visa-process-for-business-owners`
- `how-to-open-a-uae-corporate-bank-account`
- `dubai-business-licenses-explained`
- `uae-entity-incorporation-mainland-free-zone-offshore`
- `immigration-and-visa-services-for-uae-businesses`
- `banking-and-financial-onboarding-in-the-uae`
- `compliance-governance-aml-cft-for-uae-companies`
- `india-uae-cross-border-advisory-for-businesses`
- `real-estate-services-for-uae-investors-and-businesses`
- `why-uae-for-business-setup-and-expansion`
