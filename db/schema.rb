# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140810194506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "commitments", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expertise_headers", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expertises", force: true do |t|
    t.string   "name"
    t.integer  "expertise_header_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "expertises_users", id: false, force: true do |t|
    t.integer "expertise_id"
    t.integer "user_id"
  end

  create_table "members", force: true do |t|
    t.integer  "user_id"
    t.integer  "project_id"
    t.boolean  "project_manager"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
  end

  create_table "project_expertises", force: true do |t|
    t.integer  "project_id"
    t.integer  "expertise_id"
    t.integer  "commitment_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", force: true do |t|
    t.integer  "university_id"
    t.string   "project_name"
    t.string   "tagline"
    t.string   "photos"
    t.string   "industry"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "category_id"
    t.string   "expertise_string"
    t.boolean  "active",           default: true
    t.boolean  "banned",           default: false
  end

  create_table "requested_emails", force: true do |t|
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "static_pages", force: true do |t|
    t.string   "title"
    t.text     "html"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "surveys", force: true do |t|
    t.integer  "project_id"
    t.integer  "user_id"
    t.integer  "reason"
    t.string   "reason_other"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "universities", force: true do |t|
    t.string   "long_name"
    t.string   "short_name"
    t.string   "small_logo"
    t.string   "big_logo"
    t.string   "primary_color"
    t.string   "secondary_color"
    t.string   "emails"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "domains"
    t.boolean  "paid",            default: true
  end

  create_table "users", force: true do |t|
    t.integer  "university_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "profile_photo"
    t.string   "program"
    t.string   "major"
    t.integer  "grad_year"
    t.string   "expertise"
    t.string   "skill"
    t.text     "bio"
    t.integer  "permission"
    t.boolean  "active"
    t.boolean  "terms"
    t.boolean  "subscribed"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "linkedin_url"
    t.string   "facebook_url"
    t.boolean  "banned",                 default: false
    t.integer  "commitment_id"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
