<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            // Check if columns don't exist before adding
            if (!Schema::hasColumn('blogs', 'subtitle')) {
                $table->string('subtitle', 200)->nullable()->after('title');
            }
            if (!Schema::hasColumn('blogs', 'category')) {
                $table->string('category', 100)->nullable()->after('subtitle');
            }
        });
    }

    public function down(): void
    {
        Schema::table('blogs', function (Blueprint $table) {
            $table->dropColumn(['subtitle', 'category']);
        });
    }
};