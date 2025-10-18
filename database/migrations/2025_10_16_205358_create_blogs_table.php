<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            
            // Blog Details
            $table->string('title');
            $table->text('description');
            $table->longText('content');
            $table->string('featured_image')->nullable();
            
            // Author Information
            $table->string('author_name')->nullable();
            $table->string('author_role')->nullable();
            $table->string('author_avatar')->nullable();
            
            // Meta
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};