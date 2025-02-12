# Generated by Django 5.1.5 on 2025-01-21 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(editable=False, primary_key=True, serialize=False, unique=True, verbose_name='id')),
                ('display_name', models.CharField(max_length=128, unique=True, verbose_name='display name')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('is_active', models.BooleanField(default=True, verbose_name='is_active')),
                ('is_staff', models.BooleanField(default=False, verbose_name='is_staff')),
                ('is_superuser', models.BooleanField(default=False, verbose_name='is_superuser')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last_login')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated_at')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
