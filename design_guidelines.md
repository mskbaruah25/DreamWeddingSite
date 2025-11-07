# Design Guidelines: Sukanyaa & Monisankar Wedding Website

## Design Approach
**Reference-Based**: Elegant wedding website with sophisticated typography, dual color palette (light cream and dramatic black sections), and romantic photography. Drawing inspiration from high-end wedding invitation design and modern wedding website platforms like Joy, Zola, and Minted.

## Core Design Principles
1. **Elegance through restraint**: Clean layouts with generous whitespace
2. **Emotional storytelling**: Photography-driven narrative flow
3. **Sophisticated contrast**: Alternating light and dark sections for visual rhythm
4. **Seamless navigation**: Smooth scroll with subtle section transitions

---

## Typography

**Primary Headings** (Names, Section Titles):
- Font: Playfair Display or Cormorant Garamond (Google Fonts)
- Weights: Regular (400) for bride's name, SemiBold (600) for section titles
- Sizes: Hero names (text-6xl to text-8xl), Section titles (text-4xl to text-5xl)

**Secondary Text** (Dates, Event Details):
- Font: Montserrat or Inter
- Weights: Light (300) for dates, Regular (400) for body, Medium (500) for emphasis
- Sizes: Dates (text-xl), Venue/Timeline (text-base to text-lg)

**Body Text**:
- Font: Lato or Open Sans
- Weight: Regular (400)
- Size: text-base with line-height of 1.7 for readability

---

## Color Palette

**Light Sections** (Hero, Invitation, Snapshot):
- Background: #F5F1E8 (warm cream/beige)
- Primary text: #2C2C2C (dark charcoal)
- Accent: #D4AF37 (golden yellow for circle accent)
- Secondary accent: #9CA89B (sage green undertones)

**Dark Sections** (Event Details):
- Background: #1A1A1A (rich black)
- Text: #FFFFFF (white)
- Accent: #D4AF37 (golden yellow for consistency)

---

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Content spacing: gap-8 to gap-12
- Component margins: mb-6, mb-8, mb-12

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Asymmetric layouts for photo sections
- Centered content for text-heavy sections

---

## Navigation

**Hamburger Menu**:
- Position: Fixed top-left (top-6 left-6)
- Icon: Three horizontal lines, 24px × 24px
- Hover: Subtle scale transform (1.05)
- Dropdown: Slide-in from left, dark overlay background (#1A1A1A with 95% opacity)
- Menu items: Large serif font (text-2xl), stacked vertically with py-4 spacing
- Smooth scroll behavior on click

---

## Component Library

### Hero Section
- Full viewport height (min-h-screen)
- Split layout: Left 60% (names + date), Right 40% (couple photo)
- Bride name: White serif, large
- Groom name: Beige serif with yellow circular background element positioned behind text
- Date: Bottom-left corner, smaller serif font
- Background: Sage green/warm gray gradient

### Invitation Section
- Three-column layout: Title (left 30%), Photo (center 40%), Text (right 30%)
- Title: Vertical text "INVITATION" in large serif
- Photo: Centered with subtle shadow
- Text: Warm, personal message with generous line-height

### Photo Gallery Section
- Split 50/50 layout
- Left image: Cream background, full-bleed
- Right image: Black background, full-bleed
- No borders, images touch edge-to-edge at center

### Snapshot of Events
- Three equal columns with floral illustrations
- Illustrations: Hand-drawn style florals above each column (rose, wildflower, tulip)
- Card-style presentation with subtle shadows
- Centered heading at top

### Event Detail Sections (Wedding Day, Receptions)
- Black background throughout
- Split layout: Left 60% (details), Right 40% (photo)
- Title: Large white serif with date
- Venue: Address in clean sans-serif
- Timeline: Structured list with times and event names
- Photos: Full-height, subtle overlay for depth

### Buttons (Directions & Add to Calendar)
- Style: Outlined buttons with rounded corners (rounded-full)
- Border: 2px solid white (on black sections)
- Padding: px-8 py-3
- Typography: Medium weight, uppercase tracking-wide
- Hover: Background fill white, text to black, smooth transition
- Spacing: Buttons side-by-side with gap-4
- Position: Below timeline information

---

## Images

**Hero Section**: 
- Large couple photo (DSC_4394.jpg) positioned on right side, full-height
- Natural lighting, professional photography style

**Invitation Section**:
- Waterfall couple photo centered (IMG_6081.HEIC equivalent)
- Portrait orientation, centered in layout

**Photo Gallery**:
- Left: Taj Mahal couple photo (DSC_4706.jpg) on cream background
- Right: Close-up rings/henna photo (IMG_6818.HEIC equivalent) on black background

**Wedding Day**:
- Couple on balcony/terrace (91A23D80 photo) on right side
- Blue/floral background setting

**Reception (Groom's)**:
- Couple at venue (D377A750 photo) on right side
- Decorative background

**Reception (Bride's)**:
- Black and white couple portrait (1F4B6736 photo) on right side
- Artistic treatment

---

## Interactions & Animations

**Scroll Behavior**:
- Smooth scroll navigation between sections
- Subtle fade-in for sections as they enter viewport (optional enhancement)

**Button Interactions**:
- Outlined buttons with background blur when over images
- Smooth fill transition on hover (0.3s ease)
- No complex hover states on blurred backgrounds

**Menu Behavior**:
- Slide-in animation for dropdown (0.4s ease-out)
- Smooth scroll to section on click
- Menu closes automatically after selection

---

## Responsive Considerations

**Desktop (lg and above)**:
- Asymmetric layouts with photo-text splits
- Multi-column Snapshot section
- Full-width hero with side-by-side elements

**Tablet (md)**:
- Stack photo-text to single column
- Maintain three columns for Snapshot
- Reduce typography sizes appropriately

**Mobile (base)**:
- All sections stack vertically
- Snapshot becomes single column
- Full-width images
- Hamburger menu essential for navigation
- Maintain aspect ratios for couple photos