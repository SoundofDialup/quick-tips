# Code Snippets for QuickTips.pro

## <a> element styling

```html
<a href="URL_HERE" alt="ALT_HERE" class="text-orange-400">LINK_HERE</a>
```

## <Article> with CLI

```html
<article class="my-10">
  <h2 class="font-condensed text-2xl font-bold text-slate-300 mb-4">
    SUBTITLE_HERE
  </h2>

  <div class="md:mx-6">
    <p class="my-4 text-slate-300"> INSTRUCTION_HERE </p>
    <pre
      class="bg-slate-900 p-2 overflow-x-auto rounded border border-green-800">
<code class="text-sm font-mono text-green-500">$ COMMAND_HERE</code>
</pre>
  </div>
</article>
```

## Code snippet with filename in tab

```html
<div class="mt-4 md:mx-6">
  <!-- Tab bar for filename -->
  <div class="bg-slate-500 p-1 rounded-t border-b border-slate-500">
    <span class="text-slate-200 text-sm pl-2">FILENAME_HERE</span>
  </div>
  <!-- Code block -->
  <pre
    class="bg-slate-700 overflow-x-auto p-2 rounded-b border border-slate-500">
<code class="text-sm font-mono text-slate-200">CODE_HERE</code>
</pre>
</div>
```

## Code snippet alone

```html
<pre class="bg-slate-800 p-2 overflow-x-auto rounded border border-slate-600">
<code class="my-4 text-slate-300">CODE_HERE</code>
</pre>
```

## PowerShell snippet

```html
<pre class="bg-blue-900 p-2 overflow-x-auto rounded border border-blue-600">
<code class="text-sm font-mono text-slate-200">PS C:\> COMMAND_HERE</code>
</pre>
```

## ERROR h2

```html
<h2 class="font-condensed text-2xl font-bold text-orange-300 mb-4 mt-20">
  SUBTITLE_HERE
</h2>
```

## ERROR terminal instruction

```html
<p class="my-4 text-orange-300 italic"> ERROR_HERE </p>
<pre class="bg-slate-900 p-2 overflow-x-auto rounded border border-green-800">
<code class="text-sm font-mono text-green-200 italic">COMMAND_HERE</code>
</pre>
```

## ERROR x2 terminal instructions

```html
<p class="my-4 text-orange-300 italic">ERROR_HERE</p>
<pre class="bg-slate-900 p-2 overflow-x-auto rounded border border-green-800">
<code class="text-sm font-mono text-green-200 italic">COMMAND_1_HERE</code>
</pre>
<pre
  class="bg-slate-900 p-2 mt-2 overflow-x-auto rounded border border-green-800">
<code class="text-sm font-mono text-green-200 italic">COMMAND_2_HERE</code>
</pre>
```
