# DB Schema

Il tema sarà un’app di `libri` in cui si potranno lasciare `recensioni` pubbliche.

DB Name: 8pt_web_app_api

## Tables

- books
- reviews

## Table: Books

- id INT AI PK UN
- title VARCHAR(50) NOTNULL
- author VARCHAR(100) NOTNULL
- cover_image VARCHAT(255) NOTNULL || DEFAULT('placehold.co/')
- abstract TEXT(500) NOTNULL
- created_at DATETIME DEFAULT(NOW())
- updated_at DATETIME DEFAULT(NOW())

## Table: Review

- id INT AI PK UN
- book_id FK
- name VARCHAR(50) DEFAULT('Anonymous')
- review TEXT(500) NOT NULL
- vote TINYINT NOTNULL
- created_at DATETIME DEFAULT(NOW())
- updated_at DATETIME DEFAULT(NOW())

## Data for the db

Below are a set of realistic example INSERT statements you can run to populate the database with sample data (10 books, ~2 reviews per book). Cover images use the placeholder service at <https://placehold.co/600x400?text=>...

```sql
-- Books
INSERT INTO `8pt_web_app_api`.`books`(`title`,`author`,`cover_image`,`abstract`) VALUES
('The Last Orchard', 'Maria Rossi', 'https://placehold.co/600x400?text=The+Last+Orchard', 'A multi-generational family saga that follows three siblings as they try to save their grandfather''s orchard and uncover long-buried secrets.'),
('Deep River', 'Daniel Harper', 'https://placehold.co/600x400?text=Deep+River', 'A quiet, lyrical novel about a small riverside town and the people whose lives intersect there.'),
('Atlas of Small Towns', 'Elena Martinez', 'https://placehold.co/600x400?text=Atlas+of+Small+Towns', 'A photo-essay style collection with short stories and portraits of fading communities across a modern country.'),
('Code of the Meadow', 'Priya Singh', 'https://placehold.co/600x400?text=Code+of+the+Meadow', 'An engineer returns to her hometown and must reconcile technical ambition with local traditions.'),
('Midnight Algorithms', 'Omar Yusuf', 'https://placehold.co/600x400?text=Midnight+Algorithms', 'A tech-thriller that traces the rise of an algorithm that starts to affect lives in unexpected ways.'),
('Paper Lanterns', 'Mei Chen', 'https://placehold.co/600x400?text=Paper+Lanterns', 'A tender coming-of-age story set around a yearly lantern festival and the friendships it forges.'),
('The Quiet Engineer', 'Lucas Moretti', 'https://placehold.co/600x400?text=The+Quiet+Engineer', 'A workplace drama about an introverted engineer whose small act of courage changes a company culture.'),
('Sea of Glass', 'Nora Bennett', 'https://placehold.co/600x400?text=Sea+of+Glass', 'A coastal mystery where a marine biologist uncovers evidence that challenges accepted history.'),
('A Study in Sunlight', 'Samuel King', 'https://placehold.co/600x400?text=A+Study+in+Sunlight', 'Interlinked tales of neighbors whose lives brighten and darken under the same relentless sun.'),
('The Cartographer''s Daughter', 'Isabelle Fournier', 'https://placehold.co/600x400?text=The+Cartographers+Daughter', 'Set in an age of maps and discovery, a young woman defies expectations to chart unexplored territories.');

-- Reviews (approx. 2 per book)
INSERT INTO `8pt_web_app_api`.`reviews`(`book_id`,`name`,`review`,`vote`) VALUES
(1, 'Giovanni', 'Rich, emotional and beautifully written — I felt transported into the orchard.', 5),
(1, 'Anna', 'A little slow in the middle but rewarding at the end.', 4),
(2, 'David', 'Atmospheric and intimate; the river almost becomes a character.', 5),
(2, 'Leila', 'Lovely prose but the pacing wasn''t for me.', 3),
(3, 'Prieto', 'A warm, human portrait of places you wouldn''t expect to love.', 4),
(3, 'Marta', 'Great photos and short pieces — perfect for slow reading.', 4),
(4, 'Rohit', 'Smart and humane — blends tech and tradition convincingly.', 5),
(4, 'Sara', 'Thought-provoking, especially about community values.', 4),
(5, 'O. Grant', 'Tense and relevant; the algorithm angle is handled well.', 5),
(5, 'M. Alvarez', 'Good thrills but sometimes too technical.', 3),
(6, 'Li Wei', 'Lovely celebration of rituals and small-town life.', 5),
(6, 'Cam', 'Gentle and poignant; would recommend to readers of literary fiction.', 4),
(7, 'Marco', 'A subtle character study with a satisfying payoff.', 4),
(7, 'Eleni', 'I liked the workplace scenes best — realistic and humane.', 4),
(8, 'Nadia', 'Haunting and vivid; the coastal imagery stayed with me.', 5),
(8, 'Peter', 'Great mystery beats but I wanted more scientific detail.', 4),
(9, 'Sam', 'Interwoven stories done well; some chapters shine.', 4),
(9, 'Jess', 'Beautiful writing; one of the better contemporary collections I''ve read.', 5),
(10, 'Isabel', 'A charming historical adventure with a strong heroine.', 5),
(10, 'Theo', 'Lovely craft and worldbuilding; wanted to stay longer in that world.', 4);

```
