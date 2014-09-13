# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Slideshow.create()

Slide.create!(
	slide_html: "<div class=\"test-class\"><img src=\"http://placehold.it/1920x1080&text=slide1\"/></div>",
	slide_weight: 20,
	slide_length: 3000,
	slideshow_id: 1
)
Slide.create!(
	slide_html: "<div class=\"test-class\"><img src=\"http://placehold.it/1920x1080&text=slide2\"/></div>",
	slide_weight: 40,
	slide_length: 3000,
	slideshow_id: 1,
)
Slide.create!(
	slide_html: "<div class=\"test-class\"><img src=\"http://placehold.it/1920x1080&text=slide3\"/></div>",
	slide_weight: 60,
	slide_length: 5000,
	slideshow_id: 1,
)